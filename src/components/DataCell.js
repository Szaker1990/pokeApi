import React from "react";
import styled from 'styled-components'

const Div = styled.div`
 display: flex;
 margin: 0 10px;
 color: #356eb7;
 font-family: 'Oswald', sans-serif;
 
`;
const Header = styled.p`
 font-weight: 600;
 line-height: 1;
`;
const Text = styled.p`
 font-weight: 400;
 text-transform: capitalize;
`;
export const DataCell = ({title, text}) => {
    return (
        <Div>
            <Header>{title}: </Header>
            <Text> {text}</Text>
        </Div>
    )
}