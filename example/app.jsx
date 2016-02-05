import React, { Component } from 'react';
import ZlideExample from './zlide-example.jsx';
import { Provider } from 'react-redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={ this.props.store }>
                <ZlideExample />
            </Provider>
        );
    }
};
