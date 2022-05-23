import Navbar from './components/Navbar'
import React from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import StartPage from './components/StartPage'
import { useState } from 'react'
import Board from './components/Board'
import WinPage from './components/WinPage'
import InfoPage from './components/InfoPage'
import SettingsPage from './components/SettingsPage'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [player1Name, setPlayer1Name] = useState('Player 1')
  const [player1Word, setPlayer1Word] = useState('')
  const [player1WordList, setPlayer1WordList] = useState([])
  const [player1Numbers, setPlayer1Numbers] = useState([])

  const [player2Name, setPlayer2Name] = useState('Player 2')
  const [player2Word, setPlayer2Word] = useState('')
  const [player2WordList, setPlayer2WordList] = useState([])
  const [player2Numbers, setPlayer2Numbers] = useState([])

  const [currPlayer, setPlayer] = useState(1)

  const [startTrigger, setStartTrigger] = useState(false)
  const [infoTrigger, setInfoTrigger] = useState(false)
  const [settingsTrigger, setSettingsTrigger] = useState(false)
  const [win, setWin] = useState(0)
  
  const [onePlayer, setOnePlayer] = useState(false)

  return (
    <div className='wrapper'>
      <Navbar
        setInfoTrigger={setInfoTrigger}
        setSettingsTrigger={setSettingsTrigger}
      />

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h1> Player {currPlayer}'s Turn</h1>
      </div>

      <Board
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers],
          [player2Name, player2Word, player2WordList, player2Numbers],
        ]}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        onePlayer={onePlayer}
        win={win}
        setWin={setWin}
      />
      <Keyboard
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers],
          [player2Name, player2Word, player2WordList, player2Numbers],
        ]}
        setPlayers={[
          [
            setPlayer1Name,
            setPlayer1Word,
            setPlayer1WordList,
            setPlayer1Numbers,
          ],
          [
            setPlayer2Name,
            setPlayer2Word,
            setPlayer2WordList,
            setPlayer2Numbers,
          ],
        ]}
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
        onePlayer={onePlayer}
      />
      <StartPage
        trigger={startTrigger}
        setTrigger={setStartTrigger}
        currPlayer={currPlayer}
        setPlayer={setPlayer}
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers],
          [player2Name, player2Word, player2WordList, player2Numbers],
        ]}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
      />
      <WinPage
        Players={[
          [player1Name, player1Word, player1WordList, player1Numbers],
          [player2Name, player2Word, player2WordList, player2Numbers],
        ]}
        win={win}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        setWin={setWin}
        currPlayer={currPlayer}
        setPlayer={setPlayer}
        start={startTrigger}
        setStart={setStartTrigger}
        onePlayer={onePlayer}
      />
      
      <SettingsPage 
        settingsTrigger={settingsTrigger} 
        setSettingsTrigger={setSettingsTrigger}
        setOnePlayer={setOnePlayer}
        onePlayer={onePlayer}
        setPlayer1Name={setPlayer1Name}
        setPlayer1Word={setPlayer1Word}
        setPlayer1WordList={setPlayer1WordList}
        setPlayer2Name={setPlayer2Name}
        setPlayer2Word={setPlayer2Word}
        setPlayer2WordList={setPlayer2WordList}
        setPlayer1Numbers={setPlayer1Numbers}
        setPlayer2Numbers={setPlayer2Numbers}
        setWin={setWin}
        setPlayer={setPlayer}
        startTrigger={startTrigger}
        setStart={setStartTrigger}
       />
      <InfoPage
        infoTrigger={infoTrigger}
        setInfoTrigger={setInfoTrigger}
      />

    </div>
  )
}

export default App
