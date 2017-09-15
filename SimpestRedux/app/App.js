import React, { Component } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import { Provider } from 'react-redux';
import store from './redux/Store';
import CalculateForm from './components/Calculate/CaculateForm';

export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
            <CalculateForm />
        </Provider>
      );
    }
}