import Navbar from './components/Navbar'
import React from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import StartPage from './components/StartPage'
import { useState } from 'react'
import Board from './components/Board'
import WinPage from './components/WinPage'
import InfoPage from './components/InfoPage'

function TwoPlayer() {
  
  
  return (
    <div>
      <div style={{textAlign:'center'}}>
       <h1> Player {currPlayer}'s Turn</h1>
      </div>
      <Board
        Players={[[player1Name, player1Word, player1WordList, player1Numbers], [player2Name, player2Word, player2WordList, player2Numbers]]}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
      />
      <Keyboard
        Players={[[player1Name, player1Word, player1WordList, player1Numbers], [player2Name, player2Word, player2WordList, player2Numbers]]}
        setPlayers={[[setPlayer1Name, setPlayer1Word, setPlayer1WordList, setPlayer1Numbers], [setPlayer2Name, setPlayer2Word, setPlayer2WordList, setPlayer2Numbers]]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        win={win}
        setWin={setWin}
        currPlayer={currPlayer}
        setPlayer={setPlayer}
      />
      <StartPage
        trigger={buttonStart}
        setTrigger={setStart}
        currPlayer={currPlayer}
        Players={[[player1Name, player1Word, player1WordList, player1Numbers], [player2Name, player2Word, player2WordList, player2Numbers]]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
      />
      
    </div>
  )
}


export default TwoPlayer
