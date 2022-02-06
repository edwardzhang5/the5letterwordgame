import React from "react"

function WordSuggestions(props){
    let arr = props.text
    return (
        <div className="Word-Suggestions">
            {arr[0]} {arr[1]} {arr[2]} {arr[3]} {arr[4]}
        </div>
    )
}
export{WordSuggestions}

