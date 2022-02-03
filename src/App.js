import Home from './components/Home'
import Navbar from './components/Navbar'

import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import './App.css'
import Keyboard from './components/Keyboard';
import StartPage from './components/StartPage'
import {iseEffect, useState} from 'react';

let player1 = {
  name: 'Player 1',
  wordlist: [],
  word: ''

}

let player2 = {
  name: 'Player 1',
  wordlist: [],
  word: ''
}

function App() {
  const [buttonStart, setStart] = useState(false);
  return (
    <div>
      <main>
      <button onClick={() => setStart(true)}>Open Popup</button>
      </main>
      
    
      <StartPage trigger={buttonStart} setTrigger={setStart}>
      </StartPage>
    </div>
  )
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    height: 100vh;
  `,
}

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;    
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;  
  }
`

export default App
