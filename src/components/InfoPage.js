import '../App.css'
import React, { Component, useEffect, useState } from 'react'

function InfoPage(props) {
  useEffect(() => props.setInfoTrigger(true), [])
  const close = () => {
    props.setInfoTrigger(false)
  }
  return props.infoTrigger ? (
    <div className='StartPage'>
      <div className='Card'>
        <h1>How to Play the 5 Letter Word Game</h1>
        <ul>
          <li>
            Each player will select a valid 5 letter word to begin the game
          </li>
          <li>Guess the other player's word first to win</li>
          <li>
            Take turns inputting more words to discover information about your
            opponent's word
          </li>
          <li>
            Each time you input a 5 letter word, the game will tell you how many
            of the characters <br />
            in the word you guessed exist in your opponent's word
          </li>
        </ul>
        <div className='test-word-container'>
          <div className='left-test-word'>Player 1's word: relax</div>
          <div className='right-test-word'>Player 2's word: poles</div>
        </div>
        <div className='container'>
          <div className='left-col'>
            <div className='player-name-container'>
              <span className='player-name'>Player 1's Guesses: </span>
            </div>
            <ul className='words-list'>
              <div className='words'>
                <li>poppy</li>
                <li>daddy</li>
              </div>
              <div className='numbers'>
                <li>4</li>
                <li>1</li>
              </div>
            </ul>
            <div className='list-bottom'></div>
          </div>

          <div className='right-col'>
            <div className='player-name-container'>
              <span className='player-name'>Player 2's Guesses: </span>
            </div>
            <ul className='words-list'>
              <div className='words'>
                <li>sheet</li>
              </div>
              <div className='numbers'>
                <li>2</li>
              </div>
            </ul>
            <div className='list-bottom'></div>
          </div>
        </div>
        <h2>
          From player 1's first guess, they know 'P' is in their opponents word.
          From their second, they are able to identify 'O' as well.
        </h2>
        <button className='btn btn-sm btn-secondary' onClick={close}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ''
  )
}

export default InfoPage
