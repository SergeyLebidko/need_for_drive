import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Switch, Route} from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import {createStoreConnectedComponent} from './store/connector';
import {RUS, ENG, LS_LANG_KEY} from './settings';

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
            </Switch>
        </HashRouter>
    );
}

App.propTypes = {
    lang: PropTypes.string,
    setLang: PropTypes.func,
    defineCity: PropTypes.func
}

export default createStoreConnectedComponent(App);
