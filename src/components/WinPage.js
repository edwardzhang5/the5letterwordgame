import '../App.css'
import React, { Component, useEffect, useState } from 'react'

function WinPage(props) {
  return props.win != 0 ? (
    <div className='StartPage'>
      <div className='Card'>
        <h1>{props.Players[props.win - 1][0]} wins !!!!!</h1>
      </div>
    </div>
  ) : (
    ''
  )
}

export default WinPage
