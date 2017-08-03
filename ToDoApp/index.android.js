/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  ToolbarAndroid,
  TouchableHighlight,
  TextInput
} from 'react-native';

import DashBoardScreen from './app/screens/Dashboard';
import LoginScreen from './app/screens/LoginEmail';
import SignupScreen from './app/screens/Signup';

import styles from './app/styles/baseStyles.js';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDBYVoqefhBkdOsDrSkCSg9t1msOMdrGK8",
  authDomain: "todoapp-e9a91.firebaseapp.com",
  databaseURL: "https://todoapp-e9a91.firebaseio.com",
  projectId: "todoapp-e9a91",
  storageBucket: "todoapp-e9a91.appspot.com",
  messagingSenderId: "826907623033"
};

const firebaseApp = firebase.initializeApp(firebaseConfig, "ToDoApp");

class ToDoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      // the page is the screen we want to show the user, we will determine that
      // based on what user the firebase api returns to us.
      logged: false,
      token: null,

    };
  }

  componentWillMount(){
    // We must asynchronously get the auth state, if we use currentUser here, it'll be null
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {

      console.log('Firebase is called');
      // If the user is logged in take them to the accounts screen
      if (user != null) {
        this.setState({
          token: 'dlaksjdjaskldjkasjd',
          logged: true,
      });
        return;
      }
      // otherwise have them login
      this.setState({
        token: null,
        logged: false
      });
      // unsubscribe this observer
      unsubscribe();
    });
  }

  render() {
    if(this.state.logged) {
      return (
        <DashBoardScreen />
      );
    } else {
      return (
        <LoginScreen />
      );
    }
  }
}

AppRegistry.registerComponent('ToDoApp', () => ToDoApp);
