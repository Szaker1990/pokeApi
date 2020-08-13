import React from 'react';
import './App.scss';
import styled from 'styled-components'
import {MainPage} from "./components/MainPage";
import {Normalize} from 'styled-normalize'
import {Route, Switch} from "react-router-dom";
import {PokePage} from "./components/PokePage";

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
