import React from 'react';
import {MainPage} from "./components/MainPage";
import {Normalize} from 'styled-normalize'
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <>
        <Normalize/>
        <Switch>
            <Route exact path="/" render={() => <MainPage/>} />
        </Switch>
        </>
    );
}
export default App;
