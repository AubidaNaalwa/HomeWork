import React from 'react';
import { observer, inject } from 'mobx-react'

function NavBar(props) {
  return (
    <div id="nav">
    <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/AddNewWords">Add New Words</a></li>
        <li><a href="/SearchStartingLetters">Starting Letters</a></li>
        <li><a href="/SearchEndingLetters">Ending Letters</a></li>
        
        <li><a href="/SearchIncludingLetters">Including Letters</a></li>

        <li><a href="/SearchRepeatedLetters">Repeated Letters</a></li>
        <li className="right">MyDictionary</li>
    </ul>
</div>
  );
}

export default inject('dictionaryStore')(observer(NavBar));
