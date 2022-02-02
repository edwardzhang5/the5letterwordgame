import styled from 'styled-components'
import '../App.css'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'

const StyledKey = styled.button`
    background-color: white;
    font-size: 32px;
    color: black;
    border-radius: 10px;
    `
function Keyboard() {
    return (
        <div className="Key">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <StyledKey>Q</StyledKey>
                </Grid>
                <Grid item xs={2}>
                    <StyledKey>W</StyledKey>
                </Grid>
                <Grid item xs={2}>
                    <StyledKey>E</StyledKey>
                </Grid>
                <Grid item xs={2}>
                    <StyledKey>R</StyledKey>
                </Grid>
                <Grid item xs={2}>
                    <StyledKey>T</StyledKey>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Keyboard
