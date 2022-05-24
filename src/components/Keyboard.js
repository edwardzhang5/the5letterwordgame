import '../App.css'
import { useState } from 'react'
import CurrentWord from './CurrentWord'
import arr from '../data/GuessableWords.json'
import {ButtonGroup, Button, ToggleButton} from 'react-bootstrap'

function Keyboard(props) {
  const [currWord, setWord] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [radioValue, setRadioValue] = useState('0');
  const radios = [
    { name: 'Green', value: '1' },
    { name: 'Yellow', value: '2' },
    { name: 'Red', value: '3' },
    { name: 'Type', value: '4' }
  ];

  const delegateKeyAction = (e) => {
    if(radioValue == 0 || radioValue == 4){
      changeCurrWord(e);
    }
    else if (radioValue == 1){
      toggleGreen(e);
    }
    else if (radioValue == 2){
      toggleYellow(e);
    }
    else if (radioValue == 3){
      toggleRed(e);
    }

  }
  const toggleYellow = (e) =>{
    document.getElementById(e).classList.remove("regular-key-red", "regular-key-green")
    document.getElementById(e).classList.toggle("regular-key-yellow")
  }
  const toggleRed = (e) =>{
    document.getElementById(e).classList.toggle("regular-key-red")
    document.getElementById(e).classList.remove("regular-key-green", "regular-key-yellow")
  }
  const toggleGreen = (e) =>{
    document.getElementById(e).classList.remove("regular-key-red", "regular-key-yellow")
    document.getElementById(e).classList.toggle("regular-key-green")
  }

  const changeCurrWord = (e) => {
    setErrMsg('')
    if (e == 'DELETE') {
      if (currWord.length > 0) {
        setWord(currWord.substring(0, currWord.length - 1))
      } else {
        //ERROR: shake
      }
    } else if (e == 'ENTER') {
      if (currWord.length == 5) {
        //Word is not in our list
        if (arr.indexOf(currWord) == -1) {
          setErrMsg('Please input a valid word')
        }
        //This Branch can be rewritten with the currPlayer Hook
        else {
          //Win
          if (props.currPlayer == 1 && currWord == props.Players[1][1]) {
            setWord("")
            props.setWin(props.currPlayer)
          } else if (props.currPlayer == 2 && currWord == props.Players[0][1]) {
            setWord("")
            props.setWin(props.currPlayer)
          } 
          //Continue Game
          else {
            //Add to guessed list
            if (props.currPlayer == 1) {
              props.setPlayer1WordList([
                ...props.Players[props.currPlayer - 1][2],
                currWord,
              ])
            }
            else {
              props.setPlayer2WordList([
                ...props.Players[props.currPlayer - 1][2],
                currWord,
              ])
            }
            let numSimilarities = 0
            let numSimilaritiesMedium = 0;
            //Calculations
            if (props.currPlayer == 1) {
              for (let i = 0; i < currWord.length; i++) {
                if (props.Players[1][1].indexOf(currWord.charAt(i)) > -1) {
                  numSimilarities++
                  if(props.Players[1][1].indexOf(currWord.charAt(i)) == i){
                    numSimilaritiesMedium++;
                  }
                }
              }
              props.setPlayer1Numbers([
                ...props.Players[props.currPlayer - 1][3],
                numSimilarities,
              ])
              props.setPlayer1NumbersMedium([
                ...props.Players[props.currPlayer - 1][4],
                numSimilaritiesMedium,
              ])
              if(!props.onePlayer){
                props.setPlayer(2)
              }
            } else {
              for (let i = 0; i < currWord.length; i++) {
                if (props.Players[0][1].indexOf(currWord.charAt(i)) > -1) {
                  numSimilarities++
                  if(props.Players[1][1].indexOf(currWord.charAt(i)) == i){
                    numSimilaritiesMedium++;
                  }
                }
              }
              props.setPlayer2Numbers([
                ...props.Players[props.currPlayer - 1][3],
                numSimilarities,
              ])
              props.setPlayer2NumbersMedium([
                ...props.Players[props.currPlayer - 1][4],
                numSimilaritiesMedium,
              ])
              props.setPlayer(1)
            }
            setWord('')
          }
        }
      } else {
        //ERROR: Word is not 5 Letters
      }
    } else {
      if (currWord.length == 5) {
        console.log('ur shit')
      } else {
        setWord(currWord + e)
      }
    }
  }

  return (
    <div className='flex-container-body'>
      <div className='word-holder'>
        <CurrentWord word={currWord} setWord={setWord} />
      </div>
      <div>{errMsg}</div>
      <div>
        <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

      </div>
      <ul id='keyboard'>
        <div className='key-row'>
          <button
            className='regular-key'
            id='Q'
            value='Q'
            onClick={(e) => delegateKeyAction('Q')}
          >
            {' '}
            Q
          </button>
          <button
            className='regular-key'
            value='W'
            id='W'
            onClick={(e) => delegateKeyAction('W')}
          >
            W
          </button>
          <button
            className='regular-key'
            value='E'
            id='E'
            onClick={(e) => delegateKeyAction('E')}
          >
            E
          </button>
          <button
            className='regular-key'
            value='R'
            id='R'
            onClick={(e) => delegateKeyAction('R')}
          >
            R
          </button>
          <button
            className='regular-key'
            value='T'
            id='T'
            onClick={(e) => delegateKeyAction('T')}
          >
            T
          </button>
          <button
            className='regular-key'
            value='Y'
            id='Y'
            onClick={(e) => delegateKeyAction('Y')}
          >
            Y
          </button>
          <button
            className='regular-key'
            value='U'
            id='U'
            onClick={(e) => delegateKeyAction('U')}
          >
            U
          </button>
          <button
            className='regular-key'
            value='I'
            id='I'
            onClick={(e) => delegateKeyAction('I')}
          >
            I
          </button>
          <button
            className='regular-key'
            value='O'
            id='O'
            onClick={(e) => delegateKeyAction('O')}
          >
            O
          </button>
          <button
            className='regular-key'
            value='P'
            id='P'
            onClick={(e) => delegateKeyAction('P')}
          >
            P
          </button>
        </div>
        <div className='key-row'>
          <button
            className='regular-key'
            value='A'
            id='A'
            onClick={(e) => delegateKeyAction('A')}
          >
            A
          </button>
          <button
            className='regular-key'
            value='S'
            id='S'
            onClick={(e) => delegateKeyAction('S')}
          >
            S
          </button>
          <button
            className='regular-key'
            value='D'
            id='D'
            onClick={(e) => delegateKeyAction('D')}
          >
            D
          </button>
          <button
            className='regular-key'
            value='F'
            id='F'
            onClick={(e) => delegateKeyAction('F')}
          >
            F
          </button>
          <button
            className='regular-key'
            value='G'
            id='G'
            onClick={(e) => delegateKeyAction('G')}
          >
            G
          </button>
          <button
            className='regular-key'
            value='H'
            id='H'
            onClick={(e) => delegateKeyAction('H')}
          >
            H
          </button>
          <button
            className='regular-key'
            value='J'
            id='J'
            onClick={(e) => delegateKeyAction('J')}
          >
            J
          </button>
          <button
            className='regular-key'
            value='K'
            id='K'
            onClick={(e) => delegateKeyAction('K')}
          >
            K
          </button>
          <button
            className='regular-key'
            value='L'
            id='L'
            onClick={(e) => delegateKeyAction('L')}
          >
            L
          </button>
        </div>
        <div className='key-row'>
          <button
            className='large-key'
            value='ENTER'
            onClick={(e) => changeCurrWord('ENTER')}
          >
            ENTER
          </button>
          <button
            className='regular-key'
            value='Z'
            id='Z'
            onClick={(e) => delegateKeyAction('Z')}
          >
            Z
          </button>
          <button
            className='regular-key'
            value='X'
            id='X'
            onClick={(e) => delegateKeyAction('X')}
          >
            X
          </button>
          <button
            className='regular-key'
            value='C'
            id='C'
            onClick={(e) => delegateKeyAction('C')}
          >
            C
          </button>
          <button
            className='regular-key'
            value='V'
            id='V'
            onClick={(e) => delegateKeyAction('V')}
          >
            V
          </button>
          <button
            className='regular-key'
            value='B'
            id='B'
            onClick={(e) => delegateKeyAction('B')}
          >
            B
          </button>
          <button
            className='regular-key'
            value='N'
            id='N'
            onClick={(e) => delegateKeyAction('N')}
          >
            N
          </button>
          <button
            className='regular-key'
            value='M'
            id='M'
            onClick={(e) => delegateKeyAction('M')}
          >
            M
          </button>
          <button
            type='button'
            className='large-key'
            value='DELETE'
            onClick={(e) => changeCurrWord('DELETE')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-backspace-fill'
              viewBox='0 0 16 16'
            >
              <path d='M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z' />
            </svg>
          </button>
        </div>
      </ul>
    </div>
  )
}

export default Keyboard
