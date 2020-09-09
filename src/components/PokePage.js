import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import logo from "../assets/logo.png";
import {DataCell} from "./DataCell";
import right from "../assets/angle-right-solid.svg";
import left from "../assets/angle-left-solid.svg";

const Header = styled.div`
 height: 15vh;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`;
const DataContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 60vh;
 width: 100%;
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
 font-style: italic;
 font-size: 16px;
 font-family: 'Oswald', sans-serif;
 padding-left: 20px;
 height: 50px;
`;
const Td = styled.td`
 color: #356eb7;
 background:#f4f4f4;
 border: 1px solid white;
 font-family: 'Oswald', sans-serif;
 width: 60%;
 padding-left: 20px;
    &:nth-of-type(2) {
    text-align: center;
    width: 40%;
    }
`;
const JumboImg = styled.img`
 width: 30%;
 height: 80%;
`;
const DataWrapper = styled.div`
 width: 25%;
 display: flex;
 justify-content: center;
 flex-direction: column;
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
 padding: 5px 10px;
 cursor: pointer;
 user-select: none;
 margin-top: 55px;
`;
const Arrow = styled.img`
 height: 50px;
 width: 50px;
 color: yellow; 
`;
const FooterHead = styled.h2`
 font-size: 60px;
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
 font-size: 25px;
`;
const Bold = styled.h2`
 font-weight: 600;
 text-transform: capitalize;
`;
export const PokePage = ({ pokeData }) => {
    const[loading,setLoading] = useState(false);
    const [pokemonId,setPokemonId] = useState(parseInt(pokeData));
    const [pokemon,setPokemon] = useState({
        name: "",
        number: "",
        img: "",
        type: "",
        shiny:"Brak"
    });
    const [pokemonStats,setPokemonStats] = useState({
        attack: "2",
        def: "3",
        sp_attack: "4",
        sp_def: "5",
        life: "15",
    });
    const [region,setRegion] = useState("");
    const [gender,setGender] = useState("");
    const [encounter,setEncounter] = useState("");
    const [captureRate,setCaptureRate] = useState("");
    const getPokemonData = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                let currPoke = {
                    name: data.name,
                    number: data.id,
                    img: data.sprites.front_default,
                    type: data.types.map((pokeType) =>pokeType.type.name),
                    shiny: data.sprites.front_shiny.lenght > 1? "Nie" : "Tak"
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
                setLoading(true);
            })
            .catch( err => console.log(err));
    };
    const fetchRegion = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setRegion(data.region.name)
            })
            .catch( err => setRegion("Brak danych"));
    };
    const fetchEncounter = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setEncounter(data.name);
            })
            .catch( err => setEncounter("Brak danych"));
    };
    const fetchCaptureRate = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setCaptureRate(data.capture_rate);
                setGender(data.gender_rate)
            })
            .catch( err => console.log(err));
    };
    const calculateGender = (genderRatio) => {
        if(genderRatio === -1) return "Brak danych"
        else{
        let femaleChance = genderRatio /8.0 * 100
        let maleChance = 100 - femaleChance
        let text = `${femaleChance}% samica , ${maleChance}% samiec`
        return text
        }
    };
    useEffect(() =>{
        getPokemonData(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        fetchRegion(`https://pokeapi.co/api/v2/pokedex/${pokemonId}`);
        fetchEncounter(`https://pokeapi.co/api/v2/encounter-method/${pokemonId}`);
        fetchCaptureRate(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    },[pokemonId]);
    const calculateCatch = (rate) => {
        if(rate === 255) return "Łatwo"
        if(rate>=200) return "Średnio"
        if(rate>=100) return "Trudno"
        if(rate<100) return "Bardzo Trudno"
    };
    const ableToCatch = (rate) => {
        if(!rate) return "Brak danych"
        return rate >0 ? "Tak": "Nie"
    };
    const handlePokemonError = () => {
        if(pokemonId ===1 ) setPokemonId(807)
        else
            {
            setPokemonId(prevState => prevState - 1)
        }
    };
    const handlePokeError = () => {
        if(pokemonId ===807) setPokemonId(1)
        else
            {
            setPokemonId(prevState => prevState + 1)
        }
    };
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
                        <Legend><Bold>{pokemon.name}</Bold>Pokem ipsum dolor sit amet Exeggutor Kecleon Wing Attack Doduo Red Unown.
                            Sunt in culpa Drilbur Calcium Hoenn Shieldon Wynaut Charizard. Growl Venonat Scolipede Espeon
                            Charizard Barboach Hidden Machine. Duis aute irure dolor in reprehenderit in voluptate they're
                            comfy and easy to wear Onix what kind of Pokemon are you Fog Badge Ampharos Noctowl. Pewter City
                            Marill Slakoth Bronzong Rattata Treecko Cottonee.
                        </Legend>
                    </div>
                    <div>
                        <DataCell title={"Typ"} text={pokemon.type.join(", ")}/>
                        <DataCell title={"Płeć"} text={calculateGender(gender)}/>
                        <DataCell title={"Region"} text={region}/>
                        <DataCell title={"Występowanie w Dziczy"} text={encounter}/>
                        <DataCell title={"Możłiwość złapania"} text={ableToCatch(captureRate)}/>
                        <DataCell title={"Trudność Złapania"} text={calculateCatch(captureRate)}/>
                        <DataCell title={"Występowanie Shiny"} text={pokemon.shiny}/>
                        <DataCell title={"Dodawany do kolekcji przez"} text={"Pokeball"}/>
                    </div>
                </DataWrapper>
            </DataContainer>
            <Footer>
                <ButtonWrapper onClick={handlePokemonError}>
                        <Arrow src={left}/>
                        <ButtonText>POWRÓT</ButtonText>
                </ButtonWrapper>
                <FooterHead>{pokemon.number.toString().padStart(3,"0")} {pokemon.name}</FooterHead>
                <ButtonWrapper onClick={handlePokeError}>
                    <ButtonText>NASTĘPNY</ButtonText>
                    <Arrow src={right}/>
                </ButtonWrapper>
            </Footer>
        </>
    )
}