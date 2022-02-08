import '../App.css'
import React, { Component, useEffect, useState } from 'react'

function WinPage(props) {
  const resetGame = () => {
    props.setPlayer1Word('')
    props.setPlayer1WordList([])
    props.setPlayer2Word('')
    props.setPlayer2WordList([])
    props.setPlayer1Numbers([])
    props.setPlayer2Numbers([])
    props.setWin(0)
    props.setPlayer(1)
    props.setStart(true)
  }
  return props.win != 0 ? (
    <div className='StartPage'>
      <div className='Card'>
        <h1>{props.Players[props.win - 1][0]} wins !!!!!</h1>
        <button onClick={resetGame}>
          reset
        </button>
      </div>
    </div>
  ) : (
    ''
  )
}

export default WinPage
