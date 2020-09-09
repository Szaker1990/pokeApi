import React, {useEffect, useState} from "react";
import styled from 'styled-components'

const Table = styled.table`
 margin-top: 10px;
 width: 100%;
 border: 1px solid #C0C0C0;
 border-collapse:collapse;
 padding: 5px;
`;
const Th = styled.th`
 border: 1px solid #C0C0C0;
 padding: 5px;
 background: #f9e01d;
 color: #225fad;
 font-size: 25px;
 font-style: italic;
 font-weight: 600;
 text-transform : uppercase;
 @media (max-width: 1000px) {
  font-size: 18px ;
 }
 @media (max-width: 600px) {
 font-size: 16px;
  &:nth-child(4) {
  display: none;
  }
 }
`;
const Td = styled.td`
 border: 1px solid #C0C0C0;
 background: #f4f4f4;
 text-align: center;
 text-transform : uppercase;
 color: #356eb7;
 font-size: 20px;
 font-weight: bold;
    &:nth-of-type(6) {
    cursor: pointer;
        &:hover {
        background: #356eb7;
        color: #f9e01d;
        }
    }
  @media (max-width: 1000px) {
    font-size: 16px ;
    }
  @media (max-width: 600px) {
    font-size: 14px;
    &:nth-child(4) {
    display: none;
  }
       
`;
const Img = styled.img`
 height: 50px;
 width: 50px;
 padding: 5px 0;
 @media (max-width: 1000px) {
  height: 40px;
  width: 40px;
  }
  @media (max-width: 600px) {
  height: 30px;
  width: 30px;
  }
`;
const DataButton = styled.button`
 text-decoration: none;
 height: 40px;
 width: 70px;
 background: #f9e01d;
 color: #225fad;
 text-transform : uppercase;
 font-weight: 600;
 margin: 15px 20px;
 border: none;
 outline:none;
 cursor: pointer;
    &:hover {
    background: #225fad;
    color: #f9e01d;
    border: none;
    outline:none;
  }
  @media (max-width: 1000px) {
  width: 100px;
  height: 60px;
  }
  @media (max-width: 600px) {
  width: 300px
  }
`;
const PokeRow  = styled.tr`
  @media(max-width: 600px) {
  }
`
const ButtonContainer = styled.div`
  display: flex;
  @media(max-width: 600px) {
  flex-direction: column-reverse;
  }
`
export const PokeTable = ({func}) => {
    const [dataLoading, setDataLoading] = useState(false);
    const [pokeData, setPokeData] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [currentPokemons] = useState(0);
    const sorted = pokeData.sort((a, b) => a.id - b.id);
    const fetchPokemonData = (pokemon) => {
        let url = pokemon.url
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataLoading(true);
                setPokeData(prevState => [...prevState, data]);
            })
    };
    const getPokemons = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setNextUrl(data.next);
                setPrevUrl(data.previous);
                data.results.map((pokemon) =>
                    fetchPokemonData(pokemon)
                )
            })
            .catch(err => console.log(err));
    };
    const handleChangePage = (e, url) => {
        e.preventDefault();
        setDataLoading(false);
        setPokeData([]);
        getPokemons(url);
    };
    useEffect(() => {
        getPokemons(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
    }, [currentPokemons]);
    if (!dataLoading) return <h1>Loading Data...</h1>
    return (
        <>
            <Table>
                <thead>
                <tr>
                    <Th>ID</Th>
                    <Th>POKEMON</Th>
                    <Th>NAZWA</Th>
                    <Th>BASE EXP</Th>
                    <Th>TYP</Th>
                    <Th>WIECEJ INFORMACJI</Th>
                </tr>
                </thead>
                <tbody>
                {sorted.map(pokemon => (
                    <PokeRow onClick={func} key={pokemon.name}>
                        <Td>{pokemon.id.toString().padStart(3, "0")}</Td>
                        <Td><Img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                                 alt={"pokemon not in base"}/></Td>
                        <Td>{pokemon.name}</Td>
                        <Td>{pokemon.base_experience}</Td>
                        <Td>{pokemon.types[0].type.name}</Td>
                        <Td id={pokemon.id}>wiecej informacji</Td>
                    </PokeRow>
                ))}
                </tbody>
            </Table>
            <ButtonContainer>
                {prevUrl && <DataButton onClick={e => handleChangePage(e, prevUrl)}>Prev</DataButton>}
                {nextUrl && <DataButton onClick={e => handleChangePage(e, nextUrl)}>Next</DataButton>}
            </ButtonContainer>
        </>
    )
}