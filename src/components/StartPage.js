import styled from 'styled-components'
import '../App.css'
import Grid from '@mui/material/Grid'
import { Button, Container } from '@mui/material'
import React, { useEffect } from 'react'
import { Card } from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'
import Keyboard from './Keyboard'

function StartPage(props){
    useEffect(() => props.setTrigger(true), []);
    return (props.trigger) ? (
        <div className="StartPage">
            <Card variant="outlined" >
                hello
                <button className="close-btn" onClick={() =>props.setTrigger(false)}>
                    Begin!
                </button>
                {props.children}
            </Card>
            <Keyboard>
                
            </Keyboard>
        </div>
    ): '';
}

export default StartPage