import React from 'react';
import './App.scss';
import {MainPage} from "./components/MainPage";
import {Normalize} from 'styled-normalize'
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <>
        <Normalize/>
        <Switch>
            <Route exact path="/" render={(props) => <MainPage {...props} />} />
        </Switch>
        </>
    );
}
export default App;
