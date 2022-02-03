import styled from 'styled-components'
import '../App.css'
import Grid from '@mui/material/Grid'
import { Button, Container } from '@mui/material'

const StyledKey = styled.button`
    background-color: white;
    font-size: 26px;
    color: black;
    border-radius: 10px;
    width: ${props => props.inputWidth || '40px'};
    height: ${props => props.inputHeight || '60px'};
    padding: 0px;
    title:
    `
    
const StyledContainer = styled.div`
    background-color:black;
    width:600px;
    margin:0 auto; 
`

function Keyboard() {
    return (
        <div className="Key">
            <StyledContainer rowSpacing='20px'>
                <Grid container justifyContent="center" >
                    <Grid item xs={1}>
                        <StyledKey>Q</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey title='W' >W</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>E</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>R</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>T</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>Y</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>U</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>I</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>O</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>P</StyledKey>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={1}>
                        <StyledKey>A</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>S</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>D</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>F</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>G</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>H</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>J</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>K</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>L</StyledKey>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={2}>
                        <StyledKey inputWidth = '70px'>Back</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>Z</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>X</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>C</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>V</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>B</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>N</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>M</StyledKey>
                    </Grid>
                    <Grid item xs={1}>
                        <StyledKey>Back</StyledKey>
                    </Grid>

                </Grid>
            </StyledContainer>



        </div>
    )
}

export default Keyboard
