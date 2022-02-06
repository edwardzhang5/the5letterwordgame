import styled from 'styled-components'
import '../App.css'
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@mui/material'
import React, { Component, useEffect, useState } from 'react'
import arr from '../data/WordList.json'

function WinPage(props) {
  return props.win != 2 ? (
    <div className='StartPage'>
      <div className='Card'>
        <h1>{props.Players[props.win][0]} wins !!!!!</h1>
      </div>
    </div>
  ) : (
    ''
  )
}

export default WinPage
