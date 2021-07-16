import React, {useEffect} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import MainPage from './Main/MainPage/MainPage';
import dispatchMapsFactory from './store/dispatchMaps';
import stateMapsFactory from './store/stateMaps';
import {connect} from 'react-redux';
import {RUS, ENG, LS_LANG_KEY} from './settings';
import './App.scss';

function App({setLang}) {

    // При монтировании приложения - ищем языковую настройку в local storage и, если нашли - применяем её
    useEffect(() => {
        let lang = localStorage.getItem(LS_LANG_KEY);
        if (lang === RUS || lang === ENG) setLang(lang);
    }, []);

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </HashRouter>
    );
}

let stateMap = stateMapsFactory('App');
let dispatchMap = dispatchMapsFactory('App');
export default connect(stateMap, dispatchMap)(App);
