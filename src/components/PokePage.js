import React, {useState} from "react";
import styled from 'styled-components'
import logo from "../assets/logo.png"

const Header = styled.div`
height: 20vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center`;
const DataContainer = styled.div`
height: 60vh;
width100%;
background: yellow;`;
const Footer = styled.div`
height: 20vh;
width: 100%;
background: red`
const Table = styled.table`
`;
const Th = styled.th`
`;

const Td = styled.td`
`

export const PokePage = ({pokeData}) => {
    const [pokemonId] = useState(pokeData)
    const [Pokemon,setPokemon] = useState({
        name: "",
        number: "",
        img: "",

    })
    const [PokemonStats,setPokemonStats] = useState({
        attack: "",
        def: "",
        sp_attack: "",
        sp_def: "",
        life: "",
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
                        <th>Przyrosty</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>ATAK</td>
                        <td>{PokemonStats.attack}</td>
                    </tr>
                    <tr>
                        <td>OBRONA</td>
                        <td>{PokemonStats.def}</td>
                    </tr>
                    <tr>
                        <td>SP.ATAK</td>
                        <td>{PokemonStats.sp_attack}</td>
                    </tr>
                    <tr>
                        <td>SP.OBRONA</td>
                        <td>{PokemonStats.sp_def}</td>
                    </tr>
                    <tr>
                        <td>ZYCIE</td>
                        <td>{PokemonStats.life}</td>
                    </tr>
                    </tbody>
                </Table>


            </DataContainer>
            <Footer>

            </Footer>
        </>
    )
}