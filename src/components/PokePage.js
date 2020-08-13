import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import logo from "../assets/logo.png";
import {DataCell} from "./DataCell";
import right from "../assets/angle-right-solid.svg";
import left from "../assets/angle-left-solid.svg";

const Header = styled.div`
height: 20vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center
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
padding: 5px 20px;
cursor: pointer;
user-select: none;
`;

const Arrow = styled.img`
height: 50px;
width: 50px;
color yellow; 
`;
const FooterHead = styled.h2`
font-size 60px;
font-weight: 600;
color: #356eb7;
text-transform: uppercase;
width: 500px;
display: flex;
justify-content: center;
align-items: center;
`;
const ButtonText = styled.p`
font-weight: 600;
font-size: 30px;
`;
export const PokePage = ({pokeData}) => {
    const[loading,setLoading] = useState(false)
    const [pokemonId,setPokemonId] = useState(parseInt(pokeData));
    const [pokemon,setPokemon] = useState({
        name: "",
        number: "",
        img: "",
        type: "",
        shiny:"Brak"
    })
    const [pokemonStats,setPokemonStats] = useState({
        attack: "2",
        def: "3",
        sp_attack: "4",
        sp_def: "5",
        life: "15",
    })
    const [region,setRegion] = useState("")
    const [gender,setGender] = useState("")
    const [encounter,setEncounter] = useState("")
    const [captureRate,setCaptureRate] = useState("")
    const getPokemonData = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                console.log(data);
                let currPoke = {
                    name: data.name,
                    number: data.id,
                    img: data.sprites.front_default,
                    type: data.types[0].type.name,
                    shiny: data.sprites.front_shiny.lenght > 1? "No" : "Yes"
                }
                let currPokeStats = {
                    attack: data.stats[1].base_stat,
                    def: data.stats[2].base_stat,
                    sp_attack: data.stats[3].base_stat,
                    sp_def: data.stats[4].base_stat,
                    life: data.stats[0].base_stat,
                }
                setPokemon(currPoke);
                setPokemonStats(currPokeStats);
                setLoading(true)
            })
            .catch( err => console.log(err));
    }
    // const FetchData = (url,dataSetter,dataName) => {
    //     fetch(url)
    //         .then( resp => resp.json())
    //         .then( data => {
    //
    //             dataSetter(dataName)
    //             console.log(data[dataName]);
    //         })
    //         .catch( err => console.log(err));
    // }

    const fetchGender = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setGender(data.name)

            })
            .catch( err => setGender("No data"));
    }
    const fetchRegion = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setRegion(data.main_region.name)
            })
            .catch( err => setRegion("No data"));
    }
    const fetchEncounter = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setEncounter(data.name);
            })
            .catch( err => setEncounter("No data"));
    }
    const fetchCaptureRate = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setCaptureRate(data.capture_rate);
            })
            .catch( err => console.log(err));
    }
    useEffect(() =>{
        getPokemonData(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        // FetchData(`https://pokeapi.co/api/v2/generation/${pokemonId}`,setRegion, 'main_region')
        fetchGender(`https://pokeapi.co/api/v2/gender/${pokemonId}`);
        fetchRegion(`https://pokeapi.co/api/v2/generation/${pokemonId}`);
        fetchEncounter(`https://pokeapi.co/api/v2/encounter-method/${pokemonId}`);
        fetchCaptureRate(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    },[pokemonId])


    if(!loading) return <h1>Loading Data...</h1>
    return(
        <>
            <Header>
                <img src={logo} alt={"Pokemon logo"}/>
            </Header>
            <DataContainer>
                <Table>
                    <thead>
                    <tr>
                        <Th colSpan={2}>Statystyki</Th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Td>ATAK</Td>
                        <Td>{pokemonStats.attack}</Td>
                    </tr>
                    <tr>
                        <Td>OBRONA</Td>
                        <Td>{pokemonStats.def}</Td>
                    </tr>
                    <tr>
                        <Td>SP.ATAK</Td>
                        <Td>{pokemonStats.sp_attack}</Td>
                    </tr>
                    <tr>
                        <Td>SP.OBRONA</Td>
                        <Td>{pokemonStats.sp_def}</Td>
                    </tr>
                    <tr>
                        <Td>ZYCIE</Td>
                        <Td>{pokemonStats.life}</Td>
                    </tr>
                    </tbody>
                </Table>
                <JumboImg alt={"pokemon"} src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.number}.png`}/>
                <DataWrapper>
                    <div>
                        <Legend>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, cum deleniti excepturi
                            inventore laboriosam officiis optio repellat totam unde? A ab amet aperiam at beatae debitis
                            delectus dolorem, earum, eligendi hic iusto nam sint voluptatem? A dignissimos molestias
                            saepe vitae.
                        </Legend>
                    </div>
                    <div>
                        <DataCell title={"Typ"} text={pokemon.type}/>
                        <DataCell title={"Płeć"} text={gender}/>
                        <DataCell title={"Region"} text={region}/>
                        <DataCell title={"Występowanie w Dziczy"} text={encounter}/>
                        <DataCell title={"Możłiwość złapania"} text={captureRate}/>
                        <DataCell title={"Trudność Złapania"}/>
                        <DataCell title={"Występowanie Shiny"} text={pokemon.shiny}/>
                        <DataCell title={"Dodawany do kolekcji przez"}/>
                    </div>
                </DataWrapper>
            </DataContainer>
            <Footer>
                <ButtonWrapper onClick={() => setPokemonId(prevState => prevState - 1)}>
                        <Arrow src={left}/>
                        <ButtonText>POWRÓT</ButtonText>
                </ButtonWrapper>
                <FooterHead>{pokemon.number.toString().padStart(3,"0")} {pokemon.name}</FooterHead>
                <ButtonWrapper onClick={() => setPokemonId(prevState => prevState + 1)}>
                    <ButtonText>NASTĘPNY</ButtonText>
                    <Arrow src={right}/>
                </ButtonWrapper>
            </Footer>
        </>
    )
}