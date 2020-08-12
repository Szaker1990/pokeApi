import React, {useEffect, useState} from "react";
import styled from 'styled-components'

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
font-size: 25px;
font-weight: bold;
`
const Img = styled.img`
height: 50px;
width: 50px;
padding: 5px 0;
`
export const PokeTable = () => {
    const[dataLoading,setDataLoading] = useState(false);
    const[pokeData,setPokeData] = useState([]);
    const[currentPokemons,setCurrentPokemons] = useState(0)
    const sorted = pokeData.sort((a,b) => a.id-b.id)

    const fetchPokemonData = (pokemon) => {
        let url = pokemon.url
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataLoading(true)
                setPokeData(prevState => [...prevState,data])
            })
    }
    const getPokemons = (url) => {
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                data.results.map((pokemon) => {
                    fetchPokemonData(pokemon)
                })
            })
            .catch( err => console.log(err));
    }
    const increasePoke = () => {
        setPokeData([])
        setDataLoading(false)
        setCurrentPokemons(prevState => prevState + 10);
    }
    const decreasePoke = () => {
        setPokeData([])
        setDataLoading(false)
        setCurrentPokemons(prevState => prevState - 10);
    }
    useEffect(()=>{
        getPokemons(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${currentPokemons}`);
    }, [currentPokemons]);
    if(!dataLoading) return <h1>Loading Data...</h1>
    return(
        <>
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
            {sorted.map(pokemon => (
                <Tr key={pokemon.name}>
                    <Td>{pokemon.id.toString().padStart(3,"0")}</Td>
                    <Td><Img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={"pokemon not in base"}/></Td>
                    <Td>{pokemon.name}</Td>
                    <Td></Td>
                    <Td>{pokemon.types[0].type.name}</Td>
                    <Td>IVOSAUR</Td>
                </Tr>
            ))}
            </tbody>
        </Table>
            <div>
                <button onClick={decreasePoke}>-</button>
                <button onClick={increasePoke}>+</button>
            </div>
            </>
    )
}