import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import MainPage from './Main/MainPage/MainPage';
import './App.css';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
