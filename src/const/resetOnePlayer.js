import arr from '../data/SuggestedWords.json'
import React, { Component, useEffect, useState } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'

const resetGameOnePlayer = (props) => {
    props.setPlayer1Word('')
    props.setPlayer1WordList([])
    props.setPlayer2Word(arr[Math.floor(Math.random() * arr.length)])
    props.setPlayer2WordList([])
    props.setPlayer2Name("Computer")
    props.setPlayer1Numbers([])
    props.setPlayer2Numbers([])
    props.setPlayer1NumbersMedium([])
    props.setPlayer2NumbersMedium([])
    props.setPlayer(1)
    props.setStart(false)
    props.setWin(0)

}

export default resetGameOnePlayer;