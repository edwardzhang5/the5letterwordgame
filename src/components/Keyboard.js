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
            <Grid container spacing={12}>
                <Grid item xs={9}>
                    <StyledKey>A</StyledKey>
                </Grid>
                <Grid item xs={4}>
                    <StyledKey>A</StyledKey>
                </Grid>
                <Grid item xs={4}>
                    <StyledKey>A</StyledKey>
                </Grid>
                <Grid item xs={8}>
                    <StyledKey>A</StyledKey>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default Keyboard
