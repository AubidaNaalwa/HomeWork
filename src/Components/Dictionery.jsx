import React ,{useState}from 'react';

import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
function Dictionary(props) {
    const [addingWords, setWords] = useState("")
    const [searchingWords, setsearchingWords] = useState("")
    const [numberOfWords, setNumberOfWords ] =useState(0)
    
    const SearchFirstLetter = ()=>{
        setNumberOfWords(props.dictionaryStore.numberOfWordsStartWith(searchingWords))
    }

    return (
        <div className="Dictionary">
            <TextField label="Search Dictionary" margin="normal" variant="outlined" value={searchingWords} onChange={(e)=>setsearchingWords(e.target.value)} />
            <Button variant="contained" color="primary" onClick={SearchFirstLetter}>
                Primary
            </Button >
            
            <TextField label="Inset To  Dictionary" margin="normal" variant="outlined" value={addingWords} onChange={(e)=>setWords(e.target.value)} />
            <Button variant="contained" color="secondary" onClick={()=>props.dictionaryStore.addingToDictionary(addingWords)}>
                Secondary
            </Button>
            {props.dictionaryStore.Dictionary.map(v => <div>{v}</div>)}
            {numberOfWords ?<div>Number OfWords is {numberOfWords}</div>:null }
        </div>
    );
}

export default inject('dictionaryStore')(observer(Dictionary));
