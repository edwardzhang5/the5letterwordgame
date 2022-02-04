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
    )
}

export default Keyboard
