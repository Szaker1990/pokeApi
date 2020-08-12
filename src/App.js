import React from 'react';
import './App.scss';
import styled from 'styled-components'
import {MainPage} from "./components/MainPage";
import {Normalize} from 'styled-normalize'

function App() {
    return (
        <div className="App">
            <Normalize/>
            <MainPage/>
        </div>
    );
}

export default App;
