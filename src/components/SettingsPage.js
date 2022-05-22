import '../App.css'
import React, { Component, useEffect, useState } from 'react'
import {Form} from 'react-bootstrap'
function SettingsPage(props) {

  const closeSettings = () => {
    props.setSettingsTrigger(false)
  }
  const toggleDarkMode = () => {
  }
  const toggleHighContrastMode = () => {
  }
  return props.settingsTrigger ? (

    <div className='StartPage'>
      <div className='Card'>

        <h1>Settings</h1>
        
        <Form>
          <Form.Group inline>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Dark Mode"
              onChange={toggleDarkMode}
            />
            <Form.Check
              type="switch"
              label="High Contrast Mode"
              id="custom-switch"
              onChange={toggleHighContrastMode}
            />
          </Form.Group>
          <Form.Group inline>
            <Form.Check
              type="switch"
              label="Two Player Mode"
              id="custom-switch"
            />
          </Form.Group>
          

        </Form>
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
