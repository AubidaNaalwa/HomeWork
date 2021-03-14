import React, { useState } from 'react';
import ReactSnackBar from "react-js-snackbar";
import { observer, inject } from 'mobx-react'

function AddNewWord(props) {
    const [addingWords, setWords] = useState("")
    const [show, setShow] = useState(false)
    const addNewWordToDB = async () => {
        try {
            
            await props.dictionaryStore.addingToDictionary(addingWords)
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 2000);
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
                <ReactSnackBar Icon={<span>🦄</span>} Show={show}>
                    Word Saved
                </ReactSnackBar>
            </div>
        </div>
    );
}

export default inject('dictionaryStore')(observer(AddNewWord));
