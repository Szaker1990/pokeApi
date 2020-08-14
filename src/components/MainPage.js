import React, {useState} from "react"
import styled from 'styled-components'
import background from "../assets/bg.png"
import logo from "../assets/logo.png"
import {PokeTable} from "./PokeTable";
import {PokePage} from "./PokePage";

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
`;
export const MainPage = () => {
    const[pokemon,setPokemon] = useState(null);
    const ViewPokemonData = (e) => {
        setPokemon(e.target.id);
    };
    if(pokemon) return <PokePage pokeData={pokemon}/>
    return(
        <Container>
            <ColumnLeft/>
            <ColumnRight>
                <img src={logo} alt={"Pokemon logo"}/>
                <PokeTable func={ViewPokemonData}/>
            </ColumnRight>
        </Container>
    )
}