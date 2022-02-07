import '../App.css'
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import arr from '../data/WordList.json'

function StartPage(props) {
  useEffect(() => props.setTrigger(true), [])

  const [currPlayer, setPlayer] = useState(props.currPlayer)

  const [wordVal, setWordVal] = useState('')
  const [wordValErr, setWordValErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const [buttonVal, setButtonVal] = useState('Next')

  const handleSubmit = (e) => {
    e.preventDefault()
    //ResetErrorState
    setErrMsg('')
    setWordValErr(false)
    if (!/^[a-zA-Z]+$/.test(wordVal)) {
      setWordValErr(true)
      setErrMsg('It\'s called the 5 LETTER word game - your word has non-alphabetic characters')
    } else if (wordVal.length != 5) {
      setWordValErr(true)
      setErrMsg('It\'s called the FIVE letter word game - your word is not 5 letters')
    } else if ((wordVal.length == 5) && (arr.indexOf(wordVal.toLowerCase()) == -1)) {
      setWordValErr(true)
      setErrMsg('We can\'t tell which one, but you\'re either too smart or too dumb for us - please choose a new word')
    }
    else {
      if (currPlayer == 1) {
        props.setPlayer1Word(wordVal.toUpperCase())
        setPlayer(2)
      } else {
        props.setPlayer2Word(wordVal.toUpperCase())
      }
      setWordVal('')
      setErrMsg('')
      setWordValErr(false)
      setButtonVal('Begin')
      setDisableNewWords(false)
      setWords([])
      if (currPlayer == 2) {
        props.setTrigger(false)
      }
      setPlayer(2)
    }
  }
  const [words, setWords] = useState([])
  const [disableNewWords, setDisableNewWords] = useState(false)

  const make5List = () => {
    //   console.log(arr[Math.floor(Math.random() * arr.length)])
    setWords([])
    setWords([
      ...words,
      arr[Math.floor(Math.random() * arr.length)],
      arr[Math.floor(Math.random() * arr.length)],
      arr[Math.floor(Math.random() * arr.length)],
      arr[Math.floor(Math.random() * arr.length)],
      arr[Math.floor(Math.random() * arr.length)],
    ])
    setDisableNewWords(true)
  }

  const WordSuggestions = (props) => {
    let arr = props.text
    return (
      <div className='Word-Suggestions'>
        {arr.map((word) => (
          <Button
            className='Word-Suggestions-Button'
            key={word}
            value={word}
            onClick={(e) => {
              setWordVal(e.target.value)
            }}
            type='submit'
          >
            {word}
          </Button>
        ))}
      </div>
    )
  }

  return props.trigger ? (
    <div className='StartPage'>
      <div className='Card'>
        <h1>{props.Players[currPlayer - 1][0]}, insert your word!</h1>
        <h2>{errMsg}</h2>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setWordVal(e.target.value)}
            label='insert word...'
            fullWidth
            required
            error={wordValErr}
            value={wordVal}
          ></TextField>
          <Button className='next-btn' type='submit'>
            {buttonVal}
          </Button>
        </form>
        <Button onClick={make5List} disabled={disableNewWords}>
          I can't think of words :(
        </Button>
        {disableNewWords ? <WordSuggestions text={words} /> : null}
        {/* {props.children} */}
      </div>
    </div>
  ) : (
    ''
  )
}

export default StartPage
