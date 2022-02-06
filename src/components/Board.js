import React from 'react'
import { useRef , useEffect} from 'react'
import './Board.css'


function Board(props) {

    useEffect(()=>{
        console.log('imagy')
    }, [props.players[0].wordList[props.players[0].wordList.length - 1]])
    

    const bottomRef = useRef();
    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <div className="container">
            <div className="left-col">
            <span>List</span>
                <ul>
                    {props.players[0].wordList.map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                </ul>
            </div>

            <div className="right-col">
                <span>List</span>
                <ul>
                    {props.players[1].wordList.map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                </ul>
            </div>
        </div>
    )

}

export default Board
