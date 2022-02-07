import Navbar from './components/Navbar'
import React from 'react'
import styled from 'styled-components'
import './App.css'
import Keyboard from './components/Keyboard'
import StartPage from './components/StartPage'
import { iseEffect, useState } from 'react'
import Board from './components/Board'
import WinPage from './components/WinPage'

//Reset button

function App() {
  const [player1Name, setPlayer1Name] = useState('Player 1')
  const [player1Word, setPlayer1Word] = useState('')
  const [player1WordList, setPlayer1WordList] = useState([])
  const [player1Numbers, setPlayer1Numbers] = useState([])

  const [player2Name, setPlayer2Name] = useState('Player 2')
  const [player2Word, setPlayer2Word] = useState('')
  const [player2WordList, setPlayer2WordList] = useState([])
  const [player2Numbers, setPlayer2Numbers] = useState([])

  const [currPlayer, setPlayer] = useState(0)
  const [buttonStart, setStart] = useState(false)

  const [win, setWin] = useState(2)
  return (
      <div className='wrapper'>
        <Navbar />

      <Board
        Players={[[player1Name, player1Word, player1WordList, player1Numbers], [player2Name, player2Word, player2WordList, player2Numbers]]}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
      />
      <Keyboard
        Players={[[player1Name, player1Word, player1WordList, player1Numbers], [player2Name, player2Word, player2WordList, player2Numbers]]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        win={win}
        setWin = {setWin}
      />

      <main>
        {/* <button onClick={() => {
          setStart(true)
          setPlayer(2)
        }}>Restart</button> */}
      </main>
      <StartPage
        trigger={buttonStart}
        setTrigger={setStart}
        curr={currPlayer}

        Players={[[player1Name, player1Word, player1WordList, player1Numbers], [player2Name, player2Word, player2WordList, player2Numbers]]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
      />
      <WinPage
      Players={[[player1Name, player1Word, player1WordList, player1Numbers], [player2Name, player2Word, player2WordList, player2Numbers]]}
      win={win}
      />
      
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
