import React from 'react'
import { useRef , useEffect} from 'react'
import './Board.css'


function Board(props) {

    useEffect(()=>{
        scrollToBottom()
    }, [props])
    

    const bottomRefLeft = useRef();
    const bottomRefRight = useRef();
    const scrollToBottom = () => {
        bottomRefLeft.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        bottomRefRight.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    
   
    return (
        <div className="container">
            <div className="left-col">
            <span>List</span>
                <ul className='flex-container'>
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
                <span>List</span>
                <ul className='flex-container'>
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
