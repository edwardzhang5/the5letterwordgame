import React, { useEffect } from 'react'

function CurrentWord(props) {
    useEffect(() => {

    }, [props.word])

    return (
        <div>
            {props.word}
        </div>
    )

}
export default CurrentWord
