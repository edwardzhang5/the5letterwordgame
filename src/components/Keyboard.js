import '../App.css'
import { useState } from 'react'
import CurrentWord from './CurrentWord'
import arr from '../data/GuessableWords.json'
import { ButtonGroup, Button, ToggleButton } from 'react-bootstrap'
import IndividualKeyboard from './IndividualKeyboard'

function Keyboard(props) {
  const [currWord, setWord] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [radioValue, setRadioValue] = useState('0');

  const [Q1, setQ1] = useState('0')
  const [W1, setW1] = useState('0')
  const [E1, setE1] = useState('0')
  const [R1, setR1] = useState('0')
  const [T1, setT1] = useState('0')
  const [Y1, setY1] = useState('0')
  const [U1, setU1] = useState('0')
  const [I1, setI1] = useState('0')
  const [O1, setO1] = useState('0')
  const [P1, setP1] = useState('0')
  const [A1, setA1] = useState('0')
  const [S1, setS1] = useState('0')
  const [D1, setD1] = useState('0')
  const [F1, setF1] = useState('0')
  const [G1, setG1] = useState('0')
  const [H1, setH1] = useState('0')
  const [J1, setJ1] = useState('0')
  const [K1, setK1] = useState('0')
  const [L1, setL1] = useState('0')
  const [Z1, setZ1] = useState('0')
  const [X1, setX1] = useState('0')
  const [C1, setC1] = useState('0')
  const [V1, setV1] = useState('0')
  const [B1, setB1] = useState('0')
  const [N1, setN1] = useState('0')
  const [M1, setM1] = useState('0')

  const keys = new Map();
  keys.set('Q', [Q1, setQ1])
  keys.set('W', [W1, setW1])
  keys.set('E', [E1, setE1])
  keys.set('R', [R1, setR1])
  keys.set('T', [T1, setT1])
  keys.set('Y', [Y1, setY1])
  keys.set('U', [U1, setU1])
  keys.set('I', [I1, setI1])
  keys.set('O', [O1, setO1])
  keys.set('P', [P1, setP1])
  keys.set('A', [A1, setA1])
  keys.set('S', [S1, setS1])
  keys.set('D', [D1, setD1])
  keys.set('F', [F1, setF1])
  keys.set('G', [G1, setG1])
  keys.set('H', [H1, setH1])
  keys.set('J', [J1, setJ1])
  keys.set('K', [K1, setK1])
  keys.set('L', [L1, setL1])
  keys.set('Z', [Z1, setZ1])
  keys.set('X', [X1, setX1])
  keys.set('C', [C1, setC1])
  keys.set('V', [V1, setV1])
  keys.set('B', [B1, setB1])
  keys.set('N', [N1, setN1])
  keys.set('M', [M1, setM1])

  const radios = [
    { name: 'Green', value: '1' },
    { name: 'Yellow', value: '2' },
    { name: 'Red', value: '3' },
    { name: 'Type', value: '4' }
  ];

  const delegateKeyAction = (e) => {
    if (radioValue == 0 || radioValue == 4) {
      changeCurrWord(e);
    }
    else if (radioValue == 1) {
      toggleGreen(e);
    }
    else if (radioValue == 2) {
      toggleYellow(e);
    }
    else if (radioValue == 3) {
      toggleRed(e);
    }

  }
  const toggleYellow = (e) => {
    document.getElementById(e).classList.remove("regular-key-red", "regular-key-green")
    document.getElementById(e).classList.toggle("regular-key-yellow")
    if(keys.get(e)[0] == 2){
      keys.get(e)[1](0);
    }
    else{
      keys.get(e)[1](2);
    }
    
  }
  const toggleRed = (e) => {
    document.getElementById(e).classList.toggle("regular-key-red")
    document.getElementById(e).classList.remove("regular-key-green", "regular-key-yellow")
    if(keys.get(e)[0] == 3){
      keys.get(e)[1](0);
    }
    else{
      keys.get(e)[1](3);
    }
  }
  const toggleGreen = (e) => {
    document.getElementById(e).classList.remove("regular-key-red", "regular-key-yellow")
    document.getElementById(e).classList.toggle("regular-key-green")
    if(keys.get(e)[0] == 1){
      keys.get(e)[1](0);
    }
    else{
      keys.get(e)[1](1);
    }
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
                  if (props.Players[1][1].indexOf(currWord.charAt(i)) == i) {
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
              if (!props.onePlayer) {
                props.setPlayer(2)
              }
            } else {
              for (let i = 0; i < currWord.length; i++) {
                if (props.Players[0][1].indexOf(currWord.charAt(i)) > -1) {
                  numSimilarities++
                  if (props.Players[1][1].indexOf(currWord.charAt(i)) == i) {
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
      <IndividualKeyboard
      Q1={Q1}
      setQ1={setQ1}
      >

      </IndividualKeyboard>
    </div>
  )
}

export default Keyboard
