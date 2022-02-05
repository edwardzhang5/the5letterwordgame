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
        <div className="flex-container-body">
            <ul id = "keyboard">
                <div className = "key-row">
                    <li className = "regular-key">Q</li>
                    <li className = "regular-key">W</li>
                    <li className = "regular-key">E</li>
                    <li className = "regular-key">R</li>
                    <li className = "regular-key">R</li>
                    <li className = "regular-key">T</li>
                    <li className = "regular-key">Y</li>
                    <li className = "regular-key">U</li>
                    <li className = "regular-key">I</li>
                    <li className = "regular-key">O</li>
                    <li className = "regular-key">P</li>
                </div>
                <div className = "key-row">
                    <li className = "regular-key">A</li>
                    <li className = "regular-key">S</li>
                    <li className = "regular-key">D</li>
                    <li className = "regular-key">F</li>
                    <li className = "regular-key">G</li>
                    <li className = "regular-key">H</li>
                    <li className = "regular-key">J</li>
                    <li className = "regular-key">K</li>
                    <li className = "regular-key">L</li>
                </div>
                <div className = "key-row">
                    <li className = "large-key">ENTER</li>
                    <li className = "regular-key">Z</li>
                    <li className = "regular-key">X</li>
                    <li className = "regular-key">C</li>
                    <li className = "regular-key">V</li>
                    <li className = "regular-key">B</li>
                    <li className = "regular-key">N</li>
                    <li className = "regular-key">M</li>
                    <li className = "large-key">DELETE</li>
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
