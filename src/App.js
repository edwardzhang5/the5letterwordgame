import Home from './components/Home'
import Navbar from './components/Navbar'

import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import './App.css'

function App() {
  return (
    <Styles.Wrapper>
      <CSSReset />
      <Navbar />
    </Styles.Wrapper>
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
