import React from 'react';
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'


function NavBar(props) {
  return (
    <div id="nav">
    <ul>
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link to="/AddNewWords">Add New Words</Link></li>
        <li><Link to="/SearchStartingLetters">Starting Letters</Link></li>
        <li><Link to="/SearchEndingLetters">Ending Letters</Link></li>
        <li><Link to="/SearchIncludingLetters">Including Letters</Link></li>
        <li><Link to="/SearchRepeatedLetters">Repeated Letters</Link></li>
        <li className="right">MyDictionary</li>
    </ul>
</div>
  );
}

export default inject('dictionaryStore')(observer(NavBar));
