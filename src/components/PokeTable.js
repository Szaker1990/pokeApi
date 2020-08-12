import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import charmander from "../assets/Charmander_by_xous54.png"

const Table = styled.table`
margin-top: 10px;
width:100%;
border:1px solid #C0C0C0;
border-collapse:collapse;
padding:5px
;`
const Tr = styled.tr`
`
const Th = styled.th`
border:1px solid #C0C0C0;
padding:5px;
background: #f9e01d;
color: #225fad;
font-size: 25px;
font-style: italic;
font-weight: 600;
text-transform : uppercase;
`
const Td = styled.td`
border:1px solid #C0C0C0;
background: #f4f4f4;
text-align: center;
text-transform : uppercase;
color: #356eb7;
max-height: 50px;
margin: auto;
`
const Img = styled.img`
height: 50px;
width: 40px;
padding: 5px 0;
`
export const PokeTable = () => {
    const [pokemons, setPokemons] = useState([]);
    const[pokeData,setPokeData] = useState([]);

    const fetchPokemonData = (pokemon) => {
        let url = pokemon.url
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPokeData(prevState => [...prevState,data])
            })
    }
    const getPokemons = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                setPokemons(data.results);
                console.log(data)
                let pokeData = data.results.map((pokemon) => {
                    fetchPokemonData(pokemon)
                })
            })
            .catch( err => console.log(err));
    }

    useEffect(()=>{
        getPokemons('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    }, []);


    return(
        <Table>
            <thead>
            <Tr>
                <Th>ID</Th>
                <Th>POKEMON</Th>
                <Th>NAZWA</Th>
                <Th>MIN.LVL</Th>
                <Th>TYP</Th>
                <Th>EWOLUCJA</Th>
            </Tr>
            </thead>
            <tbody>
            {pokeData.sort((a,b) => a -b).map(pokemon => (
                <Tr key={pokemon.name}>
                    <Td>{pokemon.id}</Td>
                    <Td><Img src={pokemon.sprites.front_default} alt={"pokemon"}/></Td>
                    <Td>{pokemon.name}</Td>
                    <Td>001</Td>
                    <Td>{pokemon.types[0].type.name}</Td>
                    <Td>IVOSAUR</Td>
                </Tr>
            ))}
            </tbody>
        </Table>


    )
}