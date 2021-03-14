import React, { useState } from 'react';

import { observer, inject } from 'mobx-react'

function AddNewWord(props) {
    const [addingWords, setWords] = useState("")
    return (
        <div id="container">
            <input type="text" placeholder="Insert New Word" value={addingWords} onChange={(e)=>setWords(e.target.value)}/>
            <div id="buttons">
                <button name="AddingNewWord" onClick={()=>props.dictionaryStore.addingToDictionary(addingWords)}>Adding </button>
            </div>
        </div>
    );
}

export default inject('dictionaryStore')(observer(AddNewWord));
