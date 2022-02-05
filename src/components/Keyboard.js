import styled from 'styled-components'
import '../App.css'
import Grid from '@mui/material/Grid'
import { Button, Container } from '@mui/material'
import './Keyboard.css'
import { useState } from 'react'

/*
const StyledKey = styled.button`
    background-color: #CCCCCC;
    color: '#000000';
    font-size: 26px;
    color: black;
    border-radius: 5px;
    width: ${props => props.inputWidth || '40px'};
    height: ${props => props.inputHeight || '60px'};
    padding: 2px;
    border: 0;
    
    `
const keyRows = styled.div`
    ackground-color: #5555555;
    width: 20vw;
`
const StyledContainer = styled.div`
    background-color: #333333;
    width: 30vw;
    max-width: 700px;
    margin:0 auto; 
    border-radius: 10px;
    color: white;
    
`
*/


function Keyboard() {
    const [currWord, setCurrWord] = useState('')
    const changeCurrWord = () => {
        setCurrWord('e')
    }

    return (
        <div className="flex-container-body">
            <ul id = "keyboard">
                <div className = "key-row">
                    <button className = "regular-key" value="Q">Q</button>
                    <button className = "regular-key" value="W">W</button>
                    <button className = "regular-key" value="E">E</button>
                    <button className = "regular-key" value="R">R</button>
                    <button className = "regular-key" value="T">T</button>
                    <button className = "regular-key" value="Y">Y</button>
                    <button className = "regular-key" value="U">U</button>
                    <button className = "regular-key" value="I">I</button>
                    <button className = "regular-key" value="O">O</button>
                    <button className = "regular-key" value="P">P</button>
                </div>
                <div className = "key-row">
                    <button className = "regular-key" value="A">A</button>
                    <button className = "regular-key" value="S">S</button>
                    <button className = "regular-key" value="D">D</button>
                    <button className = "regular-key" value="F">F</button>
                    <button className = "regular-key" value="G">G</button>
                    <button className = "regular-key" value="H">H</button>
                    <button className = "regular-key" value="J">J</button>
                    <button className = "regular-key" value="K">K</button>
                    <button className = "regular-key" value="L">L</button>
                </div>
                <div className = "key-row">
                    <button className = "large-key" value="ENTER">ENTER</button>
                    <button className = "regular-key" value="Z">Z</button>
                    <button className = "regular-key" value="X">X</button>
                    <button className = "regular-key" value="C">C</button>
                    <button className = "regular-key" value="V">V</button>
                    <button className = "regular-key" value="B">B</button>
                    <button className = "regular-key" value="N">N</button>
                    <button className = "regular-key" value="M">M</button>
                    <button className = "large-key" value="DELETE">DELETE</button>
                </div>
            </ul>
        </div>
        // <StyledContainer>
        //     <keyRows>

        //     </keyRows>
        //     <Grid container justifyContent="space-around">
        //         <Grid item xs={1}>
        //             <StyledKey>Q</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey color='white'>W</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>E</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>R</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>T</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>Y</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>U</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>I</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>O</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>P</StyledKey>
        //         </Grid>
        //     </Grid>
        //     <Grid container justifyContent="space-around">
        //         <Grid item xs={1}>
        //             <StyledKey>A</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>S</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>D</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>F</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>G</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>H</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>J</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>K</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>L</StyledKey>
        //         </Grid>
        //     </Grid>
        //     <Grid container justifyContent="space-evenly" >
        //         <Grid item xs={1}>
        //             <StyledKey inputWidth='60px'>ENTER</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>S</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>D</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>F</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>G</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>H</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>J</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>K</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey inputWidth='60px'>BACK</StyledKey>
        //         </Grid>
        //     </Grid>
            
        // </StyledContainer>
    )
}

export default Keyboard
