import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Switch, Route} from 'react-router-dom';
import MainPage from './main_page_components/MainPage/MainPage';
import OrderCreator from './order_ceator_components/OrderCreator/OrderCreator';
import OrderViewer from './order_viewer_components/OrderViewer/OrderViewer';
import NoMatch from './common_components/NoMatch/NoMatch';
import {createStoreConnectedComponent} from './store/connector';
import {RUS, ENG, LS_LANG_KEY} from './settings';
import 'dotenv';

function App({lang, setLang, defineCity}) {

    // При монтировании приложения - ищем языковую настройку в local storage и, если нашли - применяем её
    useEffect(() => {
        let lang = localStorage.getItem(LS_LANG_KEY);
        if (lang === RUS || lang === ENG) setLang(lang);
    }, []);

    // Также при монтировании приложения - определяем город пользователя.
    // Учитываем при этом языковую настройку, чтобы название города выводилось по-английски, если это нужно)
    useEffect(() => defineCity(lang), [lang]);

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/order/:orderId" component={OrderViewer}/>
                <Route path="/order" component={OrderCreator}/>
                <Route path="*" component={NoMatch}/>
            </Switch>
        </HashRouter>
    );
}

App.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.func,
    defineCity: PropTypes.func
}

export default createStoreConnectedComponent('App')(App);
