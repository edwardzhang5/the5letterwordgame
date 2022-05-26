import '../App.css'
import React, { Component, useEffect, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import resetGameOnePlayer from '../const/resetOnePlayer'
import resetGameTwoPlayer from '../const/resetTwoPlayer'
import $ from 'jquery'

function SettingsPage(props) {
  const [show, setShow] = useState(false);

  const closeSettings = () => {
    props.setSettingsTrigger(false)
  }
  const toggleDarkMode = () => {
  }
  const toggleHighContrastMode = () => {
  }
  const toggleHardMode = () => {
    props.setHard(!props.hard)
  }
  const toggleOnePlayerMode = () => {
    setShow(true)
    $("#custom-switch").prop("checked", !$("#custom-switch").prop("checked"));
  }
  const yesButton = () => {
    $("#custom-switch").prop("checked", !$("#custom-switch").prop("checked"));
    if (props.onePlayer) {
      resetGameTwoPlayer(props)
      setShow(true)
    }
    else {
      resetGameOnePlayer(props)
      setShow(true)
    }
    props.setOnePlayer(!props.onePlayer)
    setShow(false);
  }
  const noButton = () => {
    setShow(false);
  }

  return props.settingsTrigger ? (

    <div className='SettingsPage'>
      <div className='Card'>

        <h1>Settings</h1>

        <Form className='settings-form'>
          <div className='settings-aligner'>
            {/* <Form.Group inline> */}
            <Form.Check
              type="switch"
              id="ting"
              label="Dark Mode"
              onChange={toggleDarkMode}
              checked={props.dark}
            />
            <Form.Check
              type="switch"
              label="High Contrast Mode"
              id="customswitch"
              onChange={toggleHighContrastMode}
              checked={props.highContrast}
            />
            {/* </Form.Group> */}
            {/* <Form.Group inline> */}
            <Form.Check
              type="switch"
              label="One Player Mode"
              id="custom-switch"
              onChange={toggleOnePlayerMode}
              checked={props.onePlayer}
            />
            <Form.Check
              type="switch"
              label="Hard Mode"
              id="custom-switch"
              onChange={toggleHardMode}
              checked={props.hard}
            />
            {/* </Form.Group> */}
          </div>
        </Form>
        <Alert show={show} variant="danger" id="a">
          <Alert.Heading>Wait!</Alert.Heading>
          <p>
            This will end the current game. Are you sure you want to continue?
          </p>
          <hr />
          <div className="d-flex justify-content-center" >
            <Button onClick={yesButton} variant="danger">
              Yep
            </Button>
            <Button onClick={noButton} variant="normal">
              No :o
            </Button>
          </div>
        </Alert>


        <button className='btn btn-lrg btn-secondary' onClick={closeSettings}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ''
  )
}

export default SettingsPage
