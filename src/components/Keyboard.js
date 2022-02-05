import styled from 'styled-components'
import '../App.css'
import Grid from '@mui/material/Grid'
import { Button, Container } from '@mui/material'
import './Keyboard.css'

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


function Keyboard() {
    return (
        <div class="flex-container-body">
            <ul id = "keyboard">
                <div class = "key-row">
                    <li class = "regular-key">Q</li>
                    <li class = "regular-key">W</li>
                    <li class = "regular-key">E</li>
                    <li class = "regular-key">R</li>
                    <li class = "regular-key">R</li>
                    <li class = "regular-key">T</li>
                    <li class = "regular-key">Y</li>
                    <li class = "regular-key">U</li>
                    <li class = "regular-key">I</li>
                    <li class = "regular-key">O</li>
                    <li class = "regular-key">P</li>
                </div>
                <div class = "key-row">
                    <li class = "regular-key">A</li>
                    <li class = "regular-key">S</li>
                    <li class = "regular-key">D</li>
                    <li class = "regular-key">F</li>
                    <li class = "regular-key">G</li>
                    <li class = "regular-key">H</li>
                    <li class = "regular-key">J</li>
                    <li class = "regular-key">K</li>
                    <li class = "regular-key">L</li>
                </div>
                <div class = "key-row">
                    <li class = "large-key">ENTER</li>
                    <li class = "regular-key">Z</li>
                    <li class = "regular-key">X</li>
                    <li class = "regular-key">C</li>
                    <li class = "regular-key">V</li>
                    <li class = "regular-key">B</li>
                    <li class = "regular-key">N</li>
                    <li class = "regular-key">M</li>
                    <li class = "large-key">DELETE</li>
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
