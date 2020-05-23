import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import createSagaMiddlewre from 'redux-saga';

import { logger } from 'redux-logger';

// Custom Redux
import rootReducer from "./redux/reducer/index";
import rootSaga from "./redux/saga/index";

// Saga
const sagaMiddleware = createSagaMiddlewre();
sagaMiddleware.run(rootSaga);

// Global Store
const globalStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
