import '../App.css'
import { useState } from 'react'
import CurrentWord from './CurrentWord'
import arr from '../data/GuessableWords.json'
import { Button, ToggleButton, ButtonGroup } from 'react-bootstrap'

function Keyboard(props) {
  const [currWord, setWord] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [radioValue, setRadioValue] = useState('0');

  const keys = new Map();
  keys.set('Q1', [props.Q1, props.setQ1])
  keys.set('W1', [props.W1, props.setW1])
  keys.set('E1', [props.E1, props.setE1])
  keys.set('R1', [props.R1, props.setR1])
  keys.set('T1', [props.T1, props.setT1])
  keys.set('Y1', [props.Y1, props.setY1])
  keys.set('U1', [props.U1, props.setU1])
  keys.set('I1', [props.I1, props.setI1])
  keys.set('O1', [props.O1, props.setO1])
  keys.set('P1', [props.P1, props.setP1])
  keys.set('A1', [props.A1, props.setA1])
  keys.set('S1', [props.S1, props.setS1])
  keys.set('D1', [props.D1, props.setD1])
  keys.set('F1', [props.F1, props.setF1])
  keys.set('G1', [props.G1, props.setG1])
  keys.set('H1', [props.H1, props.setH1])
  keys.set('J1', [props.J1, props.setJ1])
  keys.set('K1', [props.K1, props.setK1])
  keys.set('L1', [props.L1, props.setL1])
  keys.set('Z1', [props.Z1, props.setZ1])
  keys.set('X1', [props.X1, props.setX1])
  keys.set('C1', [props.C1, props.setC1])
  keys.set('V1', [props.V1, props.setV1])
  keys.set('B1', [props.B1, props.setB1])
  keys.set('N1', [props.N1, props.setN1])
  keys.set('M1', [props.M1, props.setM1])
  keys.set('Q2', [props.Q2, props.setQ2])
  keys.set('W2', [props.W2, props.setW2])
  keys.set('E2', [props.E2, props.setE2])
  keys.set('R2', [props.R2, props.setR2])
  keys.set('T2', [props.T2, props.setT2])
  keys.set('Y2', [props.Y2, props.setY2])
  keys.set('U2', [props.U2, props.setU2])
  keys.set('I2', [props.I2, props.setI2])
  keys.set('O2', [props.O2, props.setO2])
  keys.set('P2', [props.P2, props.setP2])
  keys.set('A2', [props.A2, props.setA2])
  keys.set('S2', [props.S2, props.setS2])
  keys.set('D2', [props.D2, props.setD2])
  keys.set('F2', [props.F2, props.setF2])
  keys.set('G2', [props.G2, props.setG2])
  keys.set('H2', [props.H2, props.setH2])
  keys.set('J2', [props.J2, props.setJ2])
  keys.set('K2', [props.K2, props.setK2])
  keys.set('L2', [props.L2, props.setL2])
  keys.set('Z2', [props.Z2, props.setZ2])
  keys.set('X2', [props.X2, props.setX2])
  keys.set('C2', [props.C2, props.setC2])
  keys.set('V2', [props.V2, props.setV2])
  keys.set('B2', [props.B2, props.setB2])
  keys.set('N2', [props.N2, props.setN2])
  keys.set('M2', [props.M2, props.setM2])

  const radios = [
    { name: 'Green', value: '1' },
    { name: 'Yellow', value: '2' },
    { name: 'Red', value: '3' },
    { name: 'Type', value: '4' }
  ];

  const delegateKeyAction = (e) => {
    if (radioValue == 0 || radioValue == 4) {
      changeCurrWord(e.slice(0,-1));
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
            setWord('')
            props.setWin(props.currPlayer)
          } else if (props.currPlayer == 2 && currWord == props.Players[0][1]) {
            setWord('')
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
            } else {
              props.setPlayer2WordList([
                ...props.Players[props.currPlayer - 1][2],
                currWord,
              ])
            }
            let numSimilarities = 0
            let numSimilaritiesMedium = 0
            //Calculations
            if (props.currPlayer == 1) {
              for (let i = 0; i < currWord.length; i++) {
                if (props.Players[1][1].indexOf(currWord.charAt(i)) > -1) {
                  numSimilarities++
                  if (props.Players[1][1].indexOf(currWord.charAt(i)) == i) {
                    console.log(currWord.charAt(i))
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
                    console.log(currWord.charAt(i))
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
  
  return props.currPlayer == 1 ? (
    <div className='flex-container-body'>
      <div className='word-holder'>
        <CurrentWord word={currWord} setWord={setWord} />

      </div>
      <div className='err-msg-holder'>{errMsg}</div>
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
              className={`radio-${idx}`}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {""}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      
      <ul id='keyboard'>
        <div className='key-row'>
          <button
            className= {props.Q1==0 || props.Q1==4? 'regular-key' : props.Q1==1 ? 'regular-key-green' : props.Q1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            id='Q1'
            value='Q'
            onClick={(e) => delegateKeyAction('Q1')}
          >
            {' '}
            Q
          </button>
          <button
            className= {props.W1==0 || props.W1==4? 'regular-key' : props.W1==1 ? 'regular-key-green' : props.W1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='W'
            id='W1'
            onClick={(e) => delegateKeyAction('W1')}
          >
            W
          </button>
          <button
            className={props.E1==0 || props.E1==4? 'regular-key' : props.E1==1 ? 'regular-key-green' : props.E1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='E'
            id='E1'
            onClick={(e) => delegateKeyAction('E1')}
          >
            E
          </button>
          <button
            className={props.R1==0 || props.R1==4? 'regular-key' : props.R1==1 ? 'regular-key-green' : props.R1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='R'
            id='R1'
            onClick={(e) => delegateKeyAction('R1')}
          >
            R
          </button>
          <button
            className={props.T1==0 || props.T1==4? 'regular-key' : props.T1==1 ? 'regular-key-green' : props.T1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='T'
            id='T1'
            onClick={(e) => delegateKeyAction('T1')}
          >
            T
          </button>
          <button
            className={props.Y1==0 || props.Y1==4? 'regular-key' : props.Y1==1 ? 'regular-key-green' : props.Y1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='Y'
            id='Y1'
            onClick={(e) => delegateKeyAction('Y1')}
          >
            Y
          </button>
          <button
            className={props.U1==0 || props.U1==4? 'regular-key' : props.U1==1 ? 'regular-key-green' : props.U1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='U'
            id='U1'
            onClick={(e) => delegateKeyAction('U1')}
          >
            U
          </button>
          <button
            className={props.I1==0 || props.I1==4? 'regular-key' : props.I1==1 ? 'regular-key-green' : props.I1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='I'
            id='I1'
            onClick={(e) => delegateKeyAction('I1')}
          >
            I
          </button>
          <button
            className={props.O1==0 || props.O1==4? 'regular-key' : props.O1==1 ? 'regular-key-green' : props.O1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='O'
            id='O1'
            onClick={(e) => delegateKeyAction('O1')}
          >
            O
          </button>
          <button
            className={props.P1==0 || props.P1==4? 'regular-key' : props.P1==1 ? 'regular-key-green' : props.P1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='P'
            id='P1'
            onClick={(e) => delegateKeyAction('P1')}
          >
            P
          </button>
        </div>
        <div className='key-row'>
          <button
            className={props.A1==0 || props.A1==4? 'regular-key' : props.A1==1 ? 'regular-key-green' : props.A1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='A'
            id='A1'
            onClick={(e) => delegateKeyAction('A1')}
          >
            A
          </button>
          <button
            className={props.S1==0 || props.S1==4? 'regular-key' : props.S1==1 ? 'regular-key-green' : props.S1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='S'
            id='S1'
            onClick={(e) => delegateKeyAction('S1')}
          >
            S
          </button>
          <button
            className={props.D1==0 || props.D1==4? 'regular-key' : props.D1==1 ? 'regular-key-green' : props.D1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='D'
            id='D1'
            onClick={(e) => delegateKeyAction('D1')}
          >
            D
          </button>
          <button
            className={props.F1==0 || props.F1==4? 'regular-key' : props.F1==1 ? 'regular-key-green' : props.F1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='F'
            id='F1'
            onClick={(e) => delegateKeyAction('F1')}
          >
            F
          </button>
          <button
            className={props.G1==0 || props.G1==4? 'regular-key' : props.G1==1 ? 'regular-key-green' : props.G1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='G'
            id='G1'
            onClick={(e) => delegateKeyAction('G1')}
          >
            G
          </button>
          <button
            className={props.H1==0 || props.H1==4? 'regular-key' : props.H1==1 ? 'regular-key-green' : props.H1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='H'
            id='H1'
            onClick={(e) => delegateKeyAction('H1')}
          >
            H
          </button>
          <button
            className={props.J1==0 || props.J1==4? 'regular-key' : props.J1==1 ? 'regular-key-green' : props.J1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='J'
            id='J1'
            onClick={(e) => delegateKeyAction('J1')}
          >
            J
          </button>
          <button
            className={props.K1==0 || props.K1==4? 'regular-key' : props.K1==1 ? 'regular-key-green' : props.K1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='K'
            id='K1'
            onClick={(e) => delegateKeyAction('K1')}
          >
            K
          </button>
          <button
            className={props.L1==0 || props.L1==4? 'regular-key' : props.L1==1 ? 'regular-key-green' : props.L1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='L'
            id='L1'
            onClick={(e) => delegateKeyAction('L1')}
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
            className={props.Z1==0 || props.Z1==4? 'regular-key' : props.Z1==1 ? 'regular-key-green' : props.Z1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='Z'
            id='Z1'
            onClick={(e) => delegateKeyAction('Z1')}
          >
            Z
          </button>
          <button
            className={props.X1==0 || props.X1==4? 'regular-key' : props.X1==1 ? 'regular-key-green' : props.X1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='X'
            id='X1'
            onClick={(e) => delegateKeyAction('X1')}
          >
            X
          </button>
          <button
            className={props.C1==0 || props.C1==4? 'regular-key' : props.C1==1 ? 'regular-key-green' : props.C1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='C'
            id='C1'
            onClick={(e) => delegateKeyAction('C1')}
          >
            C
          </button>
          <button
            className={props.V1==0 || props.V1==4? 'regular-key' : props.V1==1 ? 'regular-key-green' : props.V1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='V'
            id='V1'
            onClick={(e) => delegateKeyAction('V1')}
          >
            V
          </button>
          <button
            className={props.B1==0 || props.B1==4? 'regular-key' : props.B1==1 ? 'regular-key-green' : props.B1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='B'
            id='B1'
            onClick={(e) => delegateKeyAction('B1')}
          >
            B
          </button>
          <button
            className={props.N1==0 || props.N1==4? 'regular-key' : props.N1==1 ? 'regular-key-green' : props.N1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='N'
            id='N1'
            onClick={(e) => delegateKeyAction('N1')}
          >
            N
          </button>
          <button
            className={props.M1==0 || props.M1==4? 'regular-key' : props.M1==1 ? 'regular-key-green' : props.M1==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='M'
            id='M1'
            onClick={(e) => delegateKeyAction('M1')}
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
  :
  (
    <div className='flex-container-body'>
      <div className='word-holder'>
        <CurrentWord word={currWord} setWord={setWord} />
      </div>
      <div className='err-msg-holder'>{errMsg}</div>
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
              className={`radio-${idx}`}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {""}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <ul id='keyboard'>
        <div className='key-row'>
          <button
            className= {props.Q2==0 || props.Q2==4? 'regular-key' : props.Q2==1 ? 'regular-key-green' : props.Q2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            id='Q2'
            value='Q'
            onClick={(e) => delegateKeyAction('Q2')}
          >
            {' '}
            Q
          </button>
          <button
            className= {props.W2==0 || props.W2==4? 'regular-key' : props.W2==1 ? 'regular-key-green' : props.W2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='W'
            id='W2'
            onClick={(e) => delegateKeyAction('W2')}
          >
            W
          </button>
          <button
            className= {props.E2==0 || props.E2==4? 'regular-key' : props.E2==1 ? 'regular-key-green' : props.E2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='E'
            id='E2'
            onClick={(e) => delegateKeyAction('E2')}
          >
            E
          </button>
          <button
            className= {props.R2==0 || props.R2==4? 'regular-key' : props.R2==1 ? 'regular-key-green' : props.R2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='R'
            id='R2'
            onClick={(e) => delegateKeyAction('R2')}
          >
            R
          </button>
          <button
            className= {props.T2==0 || props.T2==4? 'regular-key' : props.T2==1 ? 'regular-key-green' : props.T2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='T'
            id='T2'
            onClick={(e) => delegateKeyAction('T2')}
          >
            T
          </button>
          <button
            className= {props.Y2==0 || props.Y2==4? 'regular-key' : props.Y2==1 ? 'regular-key-green' : props.Y2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='Y'
            id='Y2'
            onClick={(e) => delegateKeyAction('Y2')}
          >
            Y
          </button>
          <button
            className= {props.U2==0 || props.U2==4? 'regular-key' : props.U2==1 ? 'regular-key-green' : props.U2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='U'
            id='U2'
            onClick={(e) => delegateKeyAction('U2')}
          >
            U
          </button>
          <button
            className= {props.I2==0 || props.I2==4? 'regular-key' : props.I2==1 ? 'regular-key-green' : props.I2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='I'
            id='I2'
            onClick={(e) => delegateKeyAction('I2')}
          >
            I
          </button>
          <button
            className= {props.O2==0 || props.O2==4? 'regular-key' : props.O2==1 ? 'regular-key-green' : props.O2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='O'
            id='O2'
            onClick={(e) => delegateKeyAction('O2')}
          >
            O
          </button>
          <button
            className= {props.P2==0 || props.P2==4? 'regular-key' : props.P2==1 ? 'regular-key-green' : props.P2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='P'
            id='P2'
            onClick={(e) => delegateKeyAction('P2')}
          >
            P
          </button>
        </div>
        <div className='key-row'>
          <button
            className= {props.A2==0 || props.A2==4? 'regular-key' : props.A2==1 ? 'regular-key-green' : props.A2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='A'
            id='A2'
            onClick={(e) => delegateKeyAction('A2')}
          >
            A
          </button>
          <button
            className= {props.S2==0 || props.S2==4? 'regular-key' : props.S2==1 ? 'regular-key-green' : props.S2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='S'
            id='S2'
            onClick={(e) => delegateKeyAction('S2')}
          >
            S
          </button>
          <button
            className= {props.D2==0 || props.D2==4? 'regular-key' : props.D2==1 ? 'regular-key-green' : props.D2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='D'
            id='D2'
            onClick={(e) => delegateKeyAction('D2')}
          >
            D
          </button>
          <button
            className= {props.F2==0 || props.F2==4? 'regular-key' : props.F2==1 ? 'regular-key-green' : props.F2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='F'
            id='F2'
            onClick={(e) => delegateKeyAction('F2')}
          >
            F
          </button>
          <button
            className= {props.G2==0 || props.G2==4? 'regular-key' : props.G2==1 ? 'regular-key-green' : props.G2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='G'
            id='G2'
            onClick={(e) => delegateKeyAction('G2')}
          >
            G
          </button>
          <button
            className= {props.H2==0 || props.H2==4? 'regular-key' : props.H2==1 ? 'regular-key-green' : props.H2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='H'
            id='H2'
            onClick={(e) => delegateKeyAction('H2')}
          >
            H
          </button>
          <button
            className= {props.J2==0 || props.J2==4? 'regular-key' : props.J2==1 ? 'regular-key-green' : props.J2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='J'
            id='J2'
            onClick={(e) => delegateKeyAction('J2')}
          >
            J
          </button>
          <button
            className= {props.K2==0 || props.K2==4? 'regular-key' : props.K2==1 ? 'regular-key-green' : props.K2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='K'
            id='K2'
            onClick={(e) => delegateKeyAction('K2')}
          >
            K
          </button>
          <button
            className= {props.L2==0 || props.L2==4? 'regular-key' : props.L2==1 ? 'regular-key-green' : props.L2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='L'
            id='L2'
            onClick={(e) => delegateKeyAction('L2')}
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
            className= {props.Z2==0 || props.Z2==4? 'regular-key' : props.Z2==1 ? 'regular-key-green' : props.Z2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='Z'
            id='Z2'
            onClick={(e) => delegateKeyAction('Z2')}
          >
            Z
          </button>
          <button
            className= {props.X2==0 || props.X2==4? 'regular-key' : props.X2==1 ? 'regular-key-green' : props.X2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='X'
            id='X2'
            onClick={(e) => delegateKeyAction('X2')}
          >
            X
          </button>
          <button
            className= {props.C2==0 || props.C2==4? 'regular-key' : props.C2==1 ? 'regular-key-green' : props.C2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='C'
            id='C2'
            onClick={(e) => delegateKeyAction('C2')}
          >
            C
          </button>
          <button
            className= {props.V2==0 || props.V2==4? 'regular-key' : props.V2==1 ? 'regular-key-green' : props.V2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='V'
            id='V2'
            onClick={(e) => delegateKeyAction('V2')}
          >
            V
          </button>
          <button
            className= {props.B2==0 || props.B2==4? 'regular-key' : props.B2==1 ? 'regular-key-green' : props.B2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='B'
            id='B2'
            onClick={(e) => delegateKeyAction('B2')}
          >
            B
          </button>
          <button
            className= {props.N2==0 || props.N2==4? 'regular-key' : props.N2==1 ? 'regular-key-green' : props.N2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='N'
            id='N2'
            onClick={(e) => delegateKeyAction('N2')}
          >
            N
          </button>
          <button
            className= {props.M2==0 || props.M2==4? 'regular-key' : props.M2==1 ? 'regular-key-green' : props.M2==2 ? 'regular-key-yellow' : 'regular-key-red'}
            value='M'
            id='M2'
            onClick={(e) => delegateKeyAction('M2')}
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
