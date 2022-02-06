import Navbar from './components/Navbar'
import React from 'react'
import styled from 'styled-components'
import './App.css'
import Keyboard from './components/Keyboard'
import StartPage from './components/StartPage'
import { iseEffect, useState } from 'react'
import { createMuiTheme, Typography } from '@mui/material'
import Board from './components/Board'
import GlobalStyle from './globalStyle'

//make players hooks

let player1 = {
  name: 'Player 1',
  wordList: ['hi'],
  word: '',
}
//const [player1]

let player2 = {
  name: 'Player 2',
  wordList: ['hi'],
  word: '',
}
//Reset button

function App() {
  const [currPlayer, setPlayer] = useState(0)
  const [buttonStart, setStart] = useState(false)
  return (
    <>
      <GlobalStyle />
      <div className='wrapper'>
        <Navbar />
        <Board players={[player1, player2]} />
        <Keyboard players={[player1, player2]} />

        <main>
          {/* <button onClick={() => {
          setStart(true)
          setPlayer(2)
        }}>Restart</button> */}
        </main>
        <StartPage
          trigger={buttonStart}
          setTrigger={setStart}
          players={[player1, player2]}
          curr={currPlayer}
        ></StartPage>
        <Typography>{player1.word}</Typography>
      </div>
    </>
  )
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    height: 100vh;
  `,
}

export default App
