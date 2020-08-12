import React from "react";
import styled from 'styled-components'
import charmander from "../assets/Charmander_by_xous54.png"

const Table = styled.table`
margin-top: 10px;
width:100%;
border:1px solid #C0C0C0;
border-collapse:collapse;
padding:5px
;

`
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
height: 40px;
width: 40px;
padding: 5px 0;
`
export const PokeTable = () => {
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
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            <Tr>
                <Td>001</Td>
                <Td><Img src={charmander} alt={charmander}/></Td>
                <Td>BULBASAUR</Td>
                <Td>001</Td>
                <Td>TRAWA</Td>
                <Td>IVOSAUR</Td>
            </Tr>
            </tbody>
        </Table>


    )
}