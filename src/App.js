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
  wordList: ['hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi'],
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
  const [player1Name, setPlayer1Name] = useState('Player 1')
  const [player1Word, setPlayer1Word] = useState('')
  const [player1WordList, setPlayer1WordList] = useState(['hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi'])

  const [player2Name, setPlayer2Name] = useState('Player 2')
  const [player2Word, setPlayer2Word] = useState('')
  const [player2WordList, setPlayer2WordList] = useState(['hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi','hi'])

  const [currPlayer, setPlayer] = useState(0)
  const [buttonStart, setStart] = useState(false)
  return (
      <div className='wrapper'>
        <Navbar />
        <Board players={[player1, player2]} />
        <Keyboard players={[player1, player2]} />

      <Board
        Players={[[player1Name, player1Word, player1WordList], [player2Name, player2Word, player2WordList]]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
      />
      <Keyboard
        Players={[[player1Name, player1Word, player1WordList], [player2Name, player2Word, player2WordList]]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList} />

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

        playersc={[[player1Name, player1Word, player1WordList], [player2Name, player2Word, player2WordList]]}
        player1Word={player1Word}
        player1WordList={player1WordList}
        player2Name={player2Name}
        player2Word={player2Word}
        player2WordList={player2WordList}

        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
      ></StartPage>
      <Typography>{player1.word}</Typography>
    </div>
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
