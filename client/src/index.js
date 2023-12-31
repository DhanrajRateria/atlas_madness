import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

import App from './App';

const store  = configureStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));