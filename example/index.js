import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './app.jsx';

const store = createStore(reducer);

render(
    <App store={store} />,
    document.getElementById('zlide-example')
);
