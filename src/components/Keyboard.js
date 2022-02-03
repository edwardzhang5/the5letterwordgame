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
    padding: 0px;
    border: 0;
    
    `
const keyRows = styled.div`
    ackground-color: #5555555;
    width: 20vw;
`
const StyledContainer = styled.div`
    background-color: #333333;
    width: 100vw;
    max-width: 700px;
    margin:0 auto; 
    border-radius: 10px;
    color: white;
    
`


function Keyboard() {
    return (
        <div class='keyboardbackground'>
            <div class='keyboardrow'></div>
            <div class='keyboardrow'></div>
        </div>
        // <StyledContainer>
        //     <keyRows>

        //     </keyRows>
        //     <Grid container justifyContent="space-evenly" >
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
        //     <Grid container justifyContent="center" columnSpacing={5}>
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
        //     <Grid container justifyContent="space-evenly">
        //         <Grid item xs={2}>
        //             <StyledKey inputWidth='70px'>Back</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>Z</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>X</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>C</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>V</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>B</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>N</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey>M</StyledKey>
        //         </Grid>
        //         <Grid item xs={1}>
        //             <StyledKey inputWidth='70px'>Back</StyledKey>
        //         </Grid>

        //     </Grid>
        // </StyledContainer>
    )
}

export default Keyboard
