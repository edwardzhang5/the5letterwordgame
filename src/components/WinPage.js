import '../App.css'
import React, { Component, useEffect, useState } from 'react'
import resetGameOnePlayer from '../const/resetOnePlayer'
import resetGameTwoPlayer from '../const/resetTwoPlayer'
import {Form, Button, Alert} from 'react-bootstrap'

function WinPage(props) {
  const resetGameCaller = () => {
    console.log(props.onePlayer)
    console.log(props.start)
    if(props.onePlayer) {
      console.log("hi")
      (resetGameOnePlayer(props))
    }
    else{
      (resetGameTwoPlayer(props))
    }
  }
  return props.win != 0 ? (
    <div className='StartPage'>
      <div className='Card'>
        <h1>{props.Players[props.win - 1][0]} wins !!!!!</h1>
        <Alert show={props.onePlayer && (props.win == 2)}>
          The word was {props.Players[1][1]}
        </Alert>
        <button onClick={resetGameCaller}>
          New Game 
        </button>
        
      </div>
    </div>
  ) : (
    ''
  )
}

export default WinPage
