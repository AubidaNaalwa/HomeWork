import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DictionaryStore from './Store/DictionaryStore'

import { Provider } from 'mobx-react'
let dictionaryStore = new DictionaryStore()


const store = { dictionaryStore }
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
