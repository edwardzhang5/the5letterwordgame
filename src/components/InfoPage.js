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
                <button onClick={close}>
                    close
                </button>
                <h2>
                    Each player will select a valid 5 letter word to begin the game
                </h2>
                <h2>
                    Guess the other player's word first to win
                </h2>
                <h2>
                    Take turns inputting more words to discover information about your opponent's word
                </h2>
                <h2>
                    Each time you input a 5 letter word, the game will tell you how many of the characters in the word you guessed exist in your opponents words
                </h2>
                <div>
                    Player 1's word: relax
                </div>
                <div>
                    Player 2's word: poles
                </div>
                <div className="container">
                    <div className="left-col">
                        <div className='player-name-container'>
                            <span className='player-name'>Player 1's Guesses: </span>
                        </div>
                        <ul className='words-list'>
                            <div className='words'>
                                <li>
                                    poppy
                                </li>
                                <li>
                                    daddy
                                </li>
                            </div>
                            <div className='numbers'>
                                <li>
                                    4
                                </li>
                                <li>
                                    1
                                </li>
                            </div>
                        </ul>
                        <div  className='list-bottom'>

                        </div>
                    </div>

                    <div className="right-col">
                        <div className='player-name-container'>
                            <span className='player-name'>Player 2's Guesses: </span>
                        </div>
                        <ul className='words-list'>
                            <div className='words'>
                                <li>
                                    sheet
                                </li>
                            </div>
                            <div className='numbers'>
                                <li>
                                    2
                                </li>
                            </div>
                        </ul>
                        <div  className='list-bottom'>

                        </div>
                    </div>
                </div>
                <div>
                    From player 1's first guess, they know 'P' is in their opponents word. From their second, they are able to identify 'O' as well.
                </div>
                
            </div>

        </div>
    ) : (
        ''
    )
}

export default InfoPage
