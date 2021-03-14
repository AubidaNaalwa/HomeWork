import React, { useState, useEffect } from 'react';

import { observer, inject } from 'mobx-react'

function StartingLetter(props) {
    const [searching, setWords] = useState("")
    const [letters, setLetters]= useState(0)
    
    useEffect(() => {
        props.dictionaryStore.loadfromDB()
    }, [])

    const SearchForNUmberWords = ()=>{
        setLetters(props.dictionaryStore.numberOfWordsStartWith(searching))
    }

    return (
        <div id="container">
            <input type="text" placeholder="Search For Starting Letters" value={searching} onChange={(e)=>setWords(e.target.value)}/>
            <div id="buttons">
                <button onClick={SearchForNUmberWords}>Search </button>
            </div>
            {
                letters && searching? <div>
                    The Number Of words Starting With {searching} Is {letters} Words
                </div> :null
            }
        </div>
    );
}

export default inject('dictionaryStore')(observer(StartingLetter));
