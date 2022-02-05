import React from 'react'
import { useRef } from 'react'
import './Board.css'


function Board(props) {
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
                    {props.player1.wordlist.map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                </ul>
            </div>

            <div className="right-col">
                <span>List</span>
                <ul>
                    {props.player2.wordlist.map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                </ul>
            </div>
        </div>
    )

}

export default Board
