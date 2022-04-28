import '../App.css'
import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import arr from '../data/SuggestedWords.json'

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
      setErrMsg(
        "It's called the 5 LETTER word game - your word has non-alphabetic characters"
      )
    } else if (wordVal.length != 5) {
      setWordValErr(true)
      setErrMsg(
        "It's called the FIVE letter word game - your word is not 5 letters"
      )
    } else if (
      wordVal.length == 5 &&
      arr.indexOf(wordVal.toUpperCase()) == -1
    ) {
      setWordValErr(true)
      setErrMsg(
        "We can't tell which one, but you're either too smart or too dumb for us - please choose a new word"
      )
    } else {
      if (props.currPlayer == 1) {
        props.setPlayer1Word(wordVal.toUpperCase())
      } else {
        props.setPlayer2Word(wordVal.toUpperCase())
      }
      setWordVal('')
      setErrMsg('')
      setWordValErr(false)
      setDisableNewWords(false)
      setWords([])
      if (props.currPlayer == 2) {
        props.setPlayer(1)
        props.setTrigger(false)
        setButtonVal('Next')
      } else {
        props.setPlayer(2)
        setButtonVal('Begin')
      }
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
        <h1>{props.Players[props.currPlayer - 1][0]}, insert your word!</h1>
        <h2>{errMsg}</h2>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-lg-12'>
              <label htmlFor='wordInput' className='form-label'>
                Pick your 5-Letter Word
              </label>
              <div className='input-group input-group-lg '>
                <input
                  type='text'
                  className='form-control input-lg'
                  onChange={(e) => setWordVal(e.target.value)}
                  value={wordVal}
                  id='wordInput'
                  placeholder='Insert your word here'
                ></input>
              </div>
            </div>
          </div>
          <button className='btn btn-lrg' type='submit'>
            {buttonVal}
          </button>
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
