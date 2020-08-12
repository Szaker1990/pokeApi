import React from "react"
import styled from 'styled-components'
import background from "../assets/bg.png"
import logo from "../assets/logo.png"
import {PokeTable} from "./PokeTable";

const Container = styled.div`
height: 100vh;
width: 100%;
background: white;
display: flex;
`;
const ColumnLeft = styled.div`
width: 50%;
margin: 20px;
height: calc(100% - 40px);
background: #ffffff url(${background}) no-repeat;
background-size: cover
`;
const ColumnRight = styled.div`
width: 50%;
margin: 20px;
height: calc(100% - 40px);
display: flex;
flex-direction: column;
align-items: center;
`

export const MainPage = () => {
    return(
        <Container>
            <ColumnLeft/>
            <ColumnRight>
                <img src={logo} alt={"Pokemon loogo"}/>
                <PokeTable/>
            </ColumnRight>

        </Container>

    )
}