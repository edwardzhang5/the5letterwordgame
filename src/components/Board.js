import React from 'react'
import { useRef , useEffect} from 'react'
import {Form, Button, Alert} from 'react-bootstrap'

function Board(props) {

    useEffect(()=>{
        if(props.onePlayer){
            scrollToBottomOne();
        }
        else{
            scrollToBottomTwo();
        }
    }, [props])
    

    const bottomRefLeft = useRef();
    const bottomRefRight = useRef();
    
    const bottomRef = useRef();

    const scrollToBottomTwo = () => {
        bottomRefLeft.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        bottomRefRight.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const scrollToBottomOne = () => {
        bottomRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        
    };
    const giveUp = () => {
        props.setWin(2)

    }
    
   
    return props.onePlayer ? (
        <div className="container">
            <div className="left-col">
                <div className='player-name-container'>
                    <span className='player-name'>{props.Players[0][0]}</span>
                </div>
                <ul className='words-list'>
                    <div className = 'words'>
                    {props.Players[0][2].map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                    </div>
                    <div className = 'numbers'>
                    {props.Players[0][3].map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                    </div>
                </ul>
                <div ref={bottomRef} className='list-bottom'>

                </div>
            </div>
            <div>
            <Button
            onClick = {giveUp}>
                I give up
                
            </Button>
            </div>
        </div>
        
    ) : (
        <div className="container">
            <div className="left-col">
                <div className='player-name-container'>
                    <span className='player-name'>{props.Players[0][0]}</span>
                </div>
                <ul className='words-list'>
                    <div className = 'words'>
                    {props.Players[0][2].map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                    </div>
                    <div className = 'numbers'>
                    {props.Players[0][3].map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                    </div>
                </ul>
                <div ref={bottomRefLeft} className='list-bottom'>

                </div>
            </div>

            <div className="right-col">
                <div className='player-name-container'>
                    <span className='player-name'>{props.Players[1][0]}</span>
                </div>
                <ul className='words-list'>
                    <div className = 'words'>
                    {props.Players[1][2].map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                    </div>
                    <div className = 'numbers'>
                    {props.Players[1][3].map((item, i) => (<li key={`item_${i}`}>{item}</li>))}
                    </div>
                </ul>
                <div ref={bottomRefRight} className='list-bottom'>

                </div>
            </div>
        </div>
    )

}

export default Board
