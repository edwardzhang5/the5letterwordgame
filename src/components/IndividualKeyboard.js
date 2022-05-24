import '../App.css'
import { useState } from 'react'
import CurrentWord from './CurrentWord'
import arr from '../data/GuessableWords.json'
import { ButtonGroup, Button, ToggleButton } from 'react-bootstrap'

function IndividualKeyboard(props){
    return (
        <ul id='keyboard'>
        <div className='key-row'>
          <button
            className= {props.Q1==0 || props.Q1==4? 'regular-key' : props.Q1==1 ? 'regular-key-green' : props.Q1==2 ? 'regular-key-yellow' : 'regular-key-red'}
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
    )
} 
export default IndividualKeyboard;