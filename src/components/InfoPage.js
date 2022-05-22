import '../App.css'
import React, { Component, useEffect, useState } from 'react'

function InfoPage(props) {
  useEffect(() => props.setInfoTrigger(true), [])
  const closeInfo = () => {
    props.setInfoTrigger(false)
  }
  return props.infoTrigger ? (
    <div className='StartPage'>
      <div className='Card'>
        <h1>How to Play the 5 Letter Word Game</h1>
        <ul >
          <li>Guess the other player's word first to win</li>
          <li>
            Take turns inputting valid 5 letter words to discover information about your
            opponent's word
          </li>
          <li>
            Each time you input a word,the number of
            correct characters will be revealed
          </li>
        </ul>
        <div className='test-word-container'>
          <div className='left-test-word'>Player 1's word: RELAX</div>
          <div className='right-test-word'>Player 2's word: POLES</div>
        </div>
        <div className='container'>
          <div className='left-col'>
            <div className='player-name-container'>
              <span className='player-name'>Player 1's Guesses: </span>
            </div>
            <ul className='words-list'>
              <div className='words'>
                <li>POPPY</li>
                <li>STOLE</li>
              </div>
              <div className='numbers'>
                <li>4</li>
                <li>0</li>
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
                <li>SHEET</li>
              </div>
              <div className='numbers'>
                <li>2</li>
              </div>
            </ul>
            <div className='list-bottom'></div>
          </div>
        </div>
        <h2>
          From player 1's first guess, they know 'P' is in their opponents word. <br/>
          From their second, they are able to identify 'Y' as well.
        </h2>
        <button className='btn btn-sm btn-secondary' onClick={closeInfo}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ''
  )
}

export default InfoPage
