import React, {useState} from "react";
import styled from 'styled-components';
import logo from "../assets/logo.png";
import charmander from "../assets/Charmander_by_xous54.png";
import {DataCell} from "./DataCell";
import right from "../assets/angle-right-solid.svg";
import left from "../assets/angle-left-solid.svg";

const Header = styled.div`
height: 20vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const DataContainer = styled.div`
display: flex;
justify-content: space-between;
height: 60vh;
width100%;
font-family: 'Oswald', sans-serif;
`;
const Footer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 20vh;
width: 100%;
font-family: 'Oswald', sans-serif;
`;
const Table = styled.table`
width: 25%;
height: 90%;
margin-left: 20px;
`;
const Th = styled.th`
background: #f9e01d;
color: #356eb7;
border: none;
text-transform: uppercase;
font-weight : 800;
text-align: left;
text-transform: uppercase;
font-style: italic;
font-size: 20px;
font-family: 'Oswald', sans-serif;
padding-left 20px;
height: 50px;
`;
const Td = styled.td`
color: #356eb7;
background:#f4f4f4;
border: 1px solid white;
font-family: 'Oswald', sans-serif;
width: 60%;
padding-left 20px;
&:nth-of-type(2) {
text-align: center;
width: 40%;
}
`;
const JumboImg = styled.img`
width: 40%;
height 80%;
`;
const DataWrapper = styled.div`
width: 25%;
height: 90%;
`;
const Legend = styled.p`
color: #356eb7;
width:80%;
margin-left: 10px;
`;
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #f9e01d;
color:#356eb7; 
padding 5px`;
const Arrow = styled.img`
height: 50px;
width: 50px;
color yellow; 
`;
const FooterHead = styled.h2`
font-size 60px;
font-weight: 600;
margin 0 15%;
color: #356eb7;
`;
const ButtonText = styled.p`
font-weight: 600;
font-size: 30pButtonText`
export const PokePage = ({pokeData}) => {
    const [pokemonId] = useState(pokeData)
    const [Pokemon,setPokemon] = useState({
        name: "",
        number: "",
        img: "",
    })
    const [PokemonStats,setPokemonStats] = useState({
        attack: "2",
        def: "3",
        sp_attack: "4",
        sp_def: "5",
        life: "15",
    })
    return(
        <>
            <Header>
                <img src={logo} alt={"Pokemon logo"}/>
            </Header>
            <DataContainer>
                <Table>
                    <thead>
                    <tr>
                        <Th colSpan={2}>Przyrosty</Th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Td>ATAK</Td>
                        <Td>{PokemonStats.attack}</Td>
                    </tr>
                    <tr>
                        <Td>OBRONA</Td>
                        <Td>{PokemonStats.def}</Td>
                    </tr>
                    <tr>
                        <Td>SP.ATAK</Td>
                        <Td>{PokemonStats.sp_attack}</Td>
                    </tr>
                    <tr>
                        <Td>SP.OBRONA</Td>
                        <Td>{PokemonStats.sp_def}</Td>
                    </tr>
                    <tr>
                        <Td>ZYCIE</Td>
                        <Td>{PokemonStats.life}</Td>
                    </tr>
                    </tbody>
                </Table>
                <JumboImg src={charmander}/>
                <DataWrapper>
                    <div>
                        <Legend>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, cum deleniti excepturi
                            inventore laboriosam officiis optio repellat totam unde? A ab amet aperiam at beatae debitis
                            delectus dolorem, earum, eligendi hic iusto nam sint voluptatem? A dignissimos molestias
                            saepe vitae.
                        </Legend>
                    </div>
                    <div>
                        <DataCell title={"Typ"}/>
                        <DataCell title={"Płeć"}/>
                        <DataCell title={"Region"}/>
                        <DataCell title={"Występowanie w Dziczy"}/>
                        <DataCell title={"Możłiwość złapania"}/>
                        <DataCell title={"Trudność Złapania"}/>
                        <DataCell title={"Występowanie Shiny"}/>
                        <DataCell title={"Dodawany do kolekcji przez"}/>
                    </div>
                </DataWrapper>
            </DataContainer>
            <Footer>
                <ButtonWrapper>
                    <Arrow src={left}/>
                    <ButtonText>POWRÓT</ButtonText>
                </ButtonWrapper>
                <FooterHead>001 BULBASAUR</FooterHead>
                <ButtonWrapper>
                    <ButtonText>NASTĘPNY</ButtonText>
                    <Arrow src={right}/>
                </ButtonWrapper>
            </Footer>
        </>
    )
}