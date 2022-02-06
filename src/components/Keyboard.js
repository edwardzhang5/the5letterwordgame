import '../App.css'
import { useState } from 'react'
import CurrentWord from './CurrentWord'


function Keyboard(props) {
    const [currPlayer,setPlayer] = useState(1)
    const [currWord,setWord] = useState('')
    const changeCurrWord = (e) => {
        if(e == 'DELETE'){
            if(currWord.length > 0) {
                setWord(currWord.substring(0,currWord.length-1))
                console.log(currWord)
            }
            else{
                console.log("ur shit")
            }
        }
        else {
            if(e == 'ENTER'){
                if(currWord.length == 5){
                    if(currPlayer == 1){
                        props.players[0].wordList.push(currWord)
                        setWord('')
                        setPlayer(2)
                        console.log("player 1: " + props.players[0].wordList[props.players[0].wordList.length-1])
                    }
                    else{
                        props.players[1].wordList.push(currWord)
                        setWord('')
                        setPlayer(1)
                        console.log("player 2: " + props.players[1].wordList[props.players[1].wordList.length-1])

                        //console.log(props.Player1.wordList)
                    }
                    
                    console.log('entered ' + e)
                }
                else{
                    console.log('ur shit')
                }
            }
            else{
                if(currWord.length == 5){
                    console.log("ur shit")
                }
                else{
                    setWord(currWord + e)
                }
            }
        }
    }
   
    return (
        <div className="flex-container-body">
            <ul id = "keyboard">
                <div>
                <CurrentWord word={currWord}/>
                </div>

                <div className = "key-row">
                    <button className = "regular-key" value="Q" onClick = {(e) => changeCurrWord('Q')}> Q</button>
                    <button className = "regular-key" value="W" onClick = {(e) => changeCurrWord('W')}>W</button>
                    <button className = "regular-key" value="E" onClick = {(e) => changeCurrWord('E')}>E</button>
                    <button className = "regular-key" value="R" onClick = {(e) => changeCurrWord('R')}>R</button>
                    <button className = "regular-key" value="T" onClick = {(e) => changeCurrWord('T')}>T</button>
                    <button className = "regular-key" value="Y" onClick = {(e) => changeCurrWord('Y')}>Y</button>
                    <button className = "regular-key" value="U" onClick = {(e) => changeCurrWord('U')}>U</button>
                    <button className = "regular-key" value="I" onClick = {(e) => changeCurrWord('I')}>I</button>
                    <button className = "regular-key" value="O" onClick = {(e) => changeCurrWord('O')}>O</button>
                    <button className = "regular-key" value="P" onClick = {(e) => changeCurrWord('P')}>P</button>
                </div>
                <div className = "key-row">
                    <button className = "regular-key" value="A" onClick = {(e) => changeCurrWord('A')}>A</button>
                    <button className = "regular-key" value="S" onClick = {(e) => changeCurrWord('S')}>S</button>
                    <button className = "regular-key" value="D" onClick = {(e) => changeCurrWord('D')}>D</button>
                    <button className = "regular-key" value="F" onClick = {(e) => changeCurrWord('F')}>F</button>
                    <button className = "regular-key" value="G" onClick = {(e) => changeCurrWord('G')}>G</button>
                    <button className = "regular-key" value="H" onClick = {(e) => changeCurrWord('H')}>H</button>
                    <button className = "regular-key" value="J" onClick = {(e) => changeCurrWord('J')}>J</button>
                    <button className = "regular-key" value="K" onClick = {(e) => changeCurrWord('K')}>K</button>
                    <button className = "regular-key" value="L" onClick = {(e) => changeCurrWord('L')}>L</button>
                </div>
                <div className = "key-row">
                    <button className = "large-key" value="ENTER" onClick = {(e) => changeCurrWord('ENTER')}>ENTER</button>
                    <button className = "regular-key" value="Z" onClick = {(e) => changeCurrWord('Z')}>Z</button>
                    <button className = "regular-key" value="X" onClick = {(e) => changeCurrWord('X')}>X</button>
                    <button className = "regular-key" value="C" onClick = {(e) => changeCurrWord('C')}>C</button>
                    <button className = "regular-key" value="V" onClick = {(e) => changeCurrWord('V')}>V</button>
                    <button className = "regular-key" value="B" onClick = {(e) => changeCurrWord('B')}>B</button>
                    <button className = "regular-key" value="N" onClick = {(e) => changeCurrWord('N')}>N</button>
                    <button className = "regular-key" value="M" onClick = {(e) => changeCurrWord('M')}>M</button>
                    <button className = "large-key" value="DELETE" onClick = {(e) => changeCurrWord('DELETE')}>DELETE</button>
                </div>
            </ul>
        </div>
    )
}

export default Keyboard
