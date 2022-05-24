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
    document.getElementById("Q").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("W").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("E").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("R").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("T").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("Y").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("U").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("I").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("O").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("P").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("A").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("S").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("D").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("F").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("G").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("H").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("J").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("K").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("L").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("Z").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("X").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("C").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("V").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("B").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("N").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")
    document.getElementById("M").classList.remove("regular-key-red", "regular-key-yellow","regular-key-green")



}

export default resetGameOnePlayer;