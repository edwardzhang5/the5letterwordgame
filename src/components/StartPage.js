import styled from 'styled-components'
import '../App.css'
import Grid from '@mui/material/Grid'
import { Button, Container, TextField } from '@mui/material'
import React, { Component, useEffect } from 'react'
import { Card } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import Keyboard from './Keyboard'

const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    color: #34a0a4;
    padding: 20px;
`;
const StyledDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

// class Texts extends Component {
//     constructor(props){
//         super(props);
//         comments: 'hello'
//     }
// }

function StartPage(props){
    useEffect(() => props.setTrigger(true), []);
    return (props.trigger) ? (
        <StyledDiv className="StartPage">
            <Card >
                <Title>
                    Player 1, insert your word!
                </Title>
                
                <TextField id='standard-basic' label='insert word...' variant='standard'>

                </TextField>
                <button className="close-btn" onClick={() =>props.setTrigger(false)}>
                    Begin!
                </button>
                <button className='Next' >
                    Next
                </button>
                {props.children}
            </Card>
        </StyledDiv>
    ): '';
}

export default StartPage