import React, { useState } from 'react';

import { observer, inject } from 'mobx-react'

function AddNewWord(props) {
    const [addingWords, setWords] = useState("")
    const addNewWordToDB = async () => {
        try {
            await props.dictionaryStore.addingToDictionary(addingWords)
            setWords("")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div id="container">
            <input type="text" placeholder="Insert New Word" value={addingWords} onChange={(e) => setWords(e.target.value)} />
            <div id="buttons">
                <button name="AddingNewWord" onClick={addNewWordToDB}>Adding </button>
            </div>
        </div>
    );
}

export default inject('dictionaryStore')(observer(AddNewWord));
