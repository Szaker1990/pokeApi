import React from 'react';
import './App.scss';
import styled from 'styled-components'
import {MainPage} from "./components/MainPage";
import {Reset} from 'styled-reset'

function App() {
    return (
        <div className="App">
            <Reset/>
            <MainPage/>
        </div>
    );
}

export default App;
