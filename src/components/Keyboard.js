import '../App.css'
import { useState } from 'react'
import CurrentWord from './CurrentWord'
import arr from '../data/GuessableWords.json'

function Keyboard(props) {
  const [currWord, setWord] = useState('')
  const [errMsg, setErrMsg] = useState('')

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
                    numSimilaritiesMedium++
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
                    numSimilaritiesMedium++
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
      <div style={{ height: '5px', marginBottom: '25px' }}>{errMsg}</div>
      <ul id='keyboard'>
        <div className='key-row'>
          <button
            className='regular-key'
            value='Q'
            onClick={(e) => changeCurrWord('Q')}
          >
            {' '}
            Q
          </button>
          <button
            className='regular-key'
            value='W'
            onClick={(e) => changeCurrWord('W')}
          >
            W
          </button>
          <button
            className='regular-key'
            value='E'
            onClick={(e) => changeCurrWord('E')}
          >
            E
          </button>
          <button
            className='regular-key'
            value='R'
            onClick={(e) => changeCurrWord('R')}
          >
            R
          </button>
          <button
            className='regular-key'
            value='T'
            onClick={(e) => changeCurrWord('T')}
          >
            T
          </button>
          <button
            className='regular-key'
            value='Y'
            onClick={(e) => changeCurrWord('Y')}
          >
            Y
          </button>
          <button
            className='regular-key'
            value='U'
            onClick={(e) => changeCurrWord('U')}
          >
            U
          </button>
          <button
            className='regular-key'
            value='I'
            onClick={(e) => changeCurrWord('I')}
          >
            I
          </button>
          <button
            className='regular-key'
            value='O'
            onClick={(e) => changeCurrWord('O')}
          >
            O
          </button>
          <button
            className='regular-key'
            value='P'
            onClick={(e) => changeCurrWord('P')}
          >
            P
          </button>
        </div>
        <div className='key-row'>
          <button
            className='regular-key'
            value='A'
            onClick={(e) => changeCurrWord('A')}
          >
            A
          </button>
          <button
            className='regular-key'
            value='S'
            onClick={(e) => changeCurrWord('S')}
          >
            S
          </button>
          <button
            className='regular-key'
            value='D'
            onClick={(e) => changeCurrWord('D')}
          >
            D
          </button>
          <button
            className='regular-key'
            value='F'
            onClick={(e) => changeCurrWord('F')}
          >
            F
          </button>
          <button
            className='regular-key'
            value='G'
            onClick={(e) => changeCurrWord('G')}
          >
            G
          </button>
          <button
            className='regular-key'
            value='H'
            onClick={(e) => changeCurrWord('H')}
          >
            H
          </button>
          <button
            className='regular-key'
            value='J'
            onClick={(e) => changeCurrWord('J')}
          >
            J
          </button>
          <button
            className='regular-key'
            value='K'
            onClick={(e) => changeCurrWord('K')}
          >
            K
          </button>
          <button
            className='regular-key'
            value='L'
            onClick={(e) => changeCurrWord('L')}
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
            onClick={(e) => changeCurrWord('Z')}
          >
            Z
          </button>
          <button
            className='regular-key'
            value='X'
            onClick={(e) => changeCurrWord('X')}
          >
            X
          </button>
          <button
            className='regular-key'
            value='C'
            onClick={(e) => changeCurrWord('C')}
          >
            C
          </button>
          <button
            className='regular-key'
            value='V'
            onClick={(e) => changeCurrWord('V')}
          >
            V
          </button>
          <button
            className='regular-key'
            value='B'
            onClick={(e) => changeCurrWord('B')}
          >
            B
          </button>
          <button
            className='regular-key'
            value='N'
            onClick={(e) => changeCurrWord('N')}
          >
            N
          </button>
          <button
            className='regular-key'
            value='M'
            onClick={(e) => changeCurrWord('M')}
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
