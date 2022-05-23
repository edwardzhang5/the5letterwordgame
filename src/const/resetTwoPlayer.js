import arr from '../data/SuggestedWords.json'
import React, { Component, useEffect, useState } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'

const resetGameTwoPlayer = (props) => {
    props.setPlayer1Word('')
    props.setPlayer1WordList([])
    props.setPlayer2Word('')
    props.setPlayer2WordList([])
    props.setPlayer2Name("Player 2")
    props.setPlayer1Numbers([])
    props.setPlayer2Numbers([])
    props.setPlayer1NumbersMedium([])
    props.setPlayer2NumbersMedium([])
    props.setWin(0)
    props.setPlayer(1)
    props.setStart(true)
  }

export default resetGameTwoPlayer
