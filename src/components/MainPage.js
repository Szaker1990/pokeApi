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
background: #ffffff url(${background}) no-repeat;
background-size: cover
`;
const ColumnRight = styled.div`
width: 50%;
margin: 0 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Img = styled.img`
height: 80px;
`
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
                <Img src={logo} alt={"Pokemon logo"}/>
                <PokeTable func={ViewPokemonData}/>
            </ColumnRight>
        </Container>
    )
}