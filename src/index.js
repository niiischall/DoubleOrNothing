import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import gameReducer from './store/reducer';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const Store = createStore(gameReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = {Store}>
    <React.StrictMode>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
