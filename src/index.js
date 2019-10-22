import React from 'react';
import ReactDOM from 'react-dom';
import shortid from 'shortid';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers/index';
import './index.css';

const INITIAL_STATE = {
  books: [
  {id: shortid.generate(), title: 'First book in series', category: 'sci-fi'},
  {id: shortid.generate(), title: 'Second book in series', category: 'romance'},
  {id: shortid.generate(), title: 'Third book in series', category: 'sci-fi'}
  ]
}

const store = createStore(rootReducer, INITIAL_STATE)

const Wrapper = (
<Provider store={store}>
  <App/>
</Provider>
);

ReactDOM.render(Wrapper, document.getElementById('root'));