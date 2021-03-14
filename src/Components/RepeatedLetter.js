import React, { useState, useEffect } from 'react';

import { observer, inject } from 'mobx-react'

function RepeatedLetters(props) {

    const [letters, setLetters] = useState(0)

    useEffect(() => {
        loadPage()
    }, [])

    const loadPage = async () => {
        try {
            await props.dictionaryStore.loadfromDB()
            setLetters(props.dictionaryStore.numberOfWordsRepeatedLetter())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id="container">
                <div>
                    The Number Of Repeated Letters  Is {letters}
                </div> 
        </div>
    );
}

export default inject('dictionaryStore')(observer(RepeatedLetters));
