import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { observer, inject } from 'mobx-react'

import Home from './Components/Home'
import AddNewWord from './Components/AddNewWord'
import EndingLetter from './Components/EndingLetter'
import RepeatedLetter from './Components/RepeatedLetter'
import LettersIncluded from './Components/LettersIncluded'
import StartingLetter from './Components/StartingLetter'
import NavBar from './NavBar/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/AddNewWords' render={()=><AddNewWord/>}/>
        <Route exact path='/SearchEndingLetters' render={() => <EndingLetter/>} />
        <Route exact path='/SearchRepeatedLetters' render={() =><RepeatedLetter/>}/>
        <Route exact path='/SearchIncludingLetters' render={() => <LettersIncluded/>} />
        <Route exact path='/SearchStartingLetters' render={() => <StartingLetter/>} />
        <Route exact path='/' render={() =><Home/>} />
      </div>
    </Router>
  );
}

export default inject('dictionaryStore')(observer(App));
