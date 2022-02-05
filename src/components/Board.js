import React from 'react'
import {useRef} from 'react'
import './Board.css'

// const items = [...Array(100)].map((val, i) => `Item ${i}`);

// export const Board = () => (
//   <div className="container">
//     <div className="left-col">
//       Left col
//     </div>
    
//     <div className="center-col">
//       <span>List</span>
//       <ul>
//         {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
//       </ul>
//     </div>
    
//     <div className="right-col">
//       Right col
//     </div>
//   </div>
// );

// ReactDOM.render(<Board />, document.getElementById('react'));

// function Board(props){
//     const bottomRef = useRef();
//     const scrollToBottom = () =>{
//         bottomRef.current.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//         });
//     };
//     return(
//         <div className="container">
//     <div className="left-col">
//       Left col
//     </div>
    
//     <div className="center-col">
//       <span>List</span>
//       <ul>
//         {props.items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
//       </ul>
//     </div>
    
    
//   </div>
//         // <div className='container'>
//         //     <button type='button' onClick={scrollToBottom}>
//         //         Scroll To Bottom
//         //     </button>
//         //     <div className='scroll-list'>
//         //         {props.items &&
//         //         props.items.map((item,index) => (
//         //             <li key={index}>{`${index+1}. ${item}`}</li>
//         //         ))}
//         //         <div ref={bottomRef} className='list-bottom'></div>
//         //     </div>
//         // </div>
//     );
// };
// export default Board
// ReactDOM.render(<Board/>, document.getElementById('react'))