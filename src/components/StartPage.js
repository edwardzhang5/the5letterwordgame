import styled from 'styled-components'
import '../App.css'
import { Button, Container, makeStyles, TextField, Typography } from '@mui/material'
import React, { Component, useEffect, useState } from 'react'
import { Card } from '@mui/material'

import '../index.css'

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #333333;
  padding: 20px;
  font-family: FontsFree-Net-Didonesque-Display;
`
const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
//Add Styles


function StartPage(props) {
  useEffect(() => props.setTrigger(true), [])

  const [currPlayer, setPlayer] = useState(props.curr)

  const [wordVal, setWordVal] = useState('')
  const [wordValErr, setWordValErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const [buttonVal, setButtonVal] = useState('Next')

  const handleSubmit = (e) => {
    e.preventDefault()
    setWordValErr(false)
    if (!(/^[a-zA-Z]+$/.test(wordVal))) {
      setWordValErr(true)
      setErrMsg('its called the 5 letter WORD game stupid ass')
    }
    else if(wordVal.length != 5){
      setWordValErr(true)
      setErrMsg('Your word is not 5 letters, dumbass')
    }
    else if(wordVal){
      setErrMsg('')
      console.log(wordVal)
      props.players[currPlayer].word = wordVal
      setWordVal("")
      setButtonVal('Begin')
      if(currPlayer == 1){
        props.setTrigger(false)
      }
      setPlayer(1)
    }
  }

  return props.trigger ? (
    <StyledDiv className='StartPage'>
      <Card>
        <Title >{props.players[currPlayer].name}, insert your word!</Title>
        <Typography>
          {errMsg}
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setWordVal(e.target.value)}
            label='insert word...'
            fullWidth
            required
            error={wordValErr}
            value={wordVal}

          ></TextField>
          <Button
            className='next-btn'
            // onClick={() => {
            //   if (wordValErr == false) {
            //     setPlayer(1)
            //   }
            // }
            // }
            type='submit'>
            {buttonVal}
          </Button>
        </form>
        <Button onClick={make5List}>
          I can't think of words :(
        </Button>
        <Typography>
          whore, bitch, frank, drunk, peens
        </Typography>
        {props.children}
      </Card>
    </StyledDiv>
  ) : (
    ''
  )
}

export default StartPage
