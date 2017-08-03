
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
  ToolbarAndroid,
  TouchableHighlight,
  TextInput
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Signup from './Signup';
import * as firebase from 'firebase';
import styles from '../styles/baseStyles.js';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDBYVoqefhBkdOsDrSkCSg9t1msOMdrGK8",
    authDomain: "todoapp-e9a91.firebaseapp.com",
    databaseURL: "https://todoapp-e9a91.firebaseio.com",
    projectId: "todoapp-e9a91",
    storageBucket: "todoapp-e9a91.appspot.com",
    messagingSenderId: "826907623033"
  };
  const firebaseApp = firebase.initializeApp(config, "Dashboard");

class Dashboard extends React.Component {

  constructor(props){
      super(props);
      // We have the same props as in our signup.js file and they serve the same purposes.
      this.state = {
        loading: false,
        email: '',
        password: ''
      }
    }

  render () {

    const content = this.state.loading ? <ActivityIndicator size="large"/> :
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder={"Email Address"} />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={"Password"} />
        <TouchableHighlight onPress={this.login.bind(this)} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goToSignup.bind(this)} style={styles.transparentButton}>
          <Text style={styles.transparentButtonText}>New here?</Text>
        </TouchableHighlight>
      </View>;

    // A simple UI with a toolbar, and content below it.
        return (
                <View style={styles.container}>
                        <ToolbarAndroid
          style={styles.toolbar}
          title="Login" />
        <View style={styles.body}>
          {content}
        </View>
      </View>
      );
  }

  login(){
    this.setState({
      loading: true
    });
    // Log in and display an alert to tell the user what happened.
    this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then((userData) =>
      {
        this.setState({
                loading: false
              });
        alert("Login successful" + userData);
      }
    ).catch((error) =>
        {
              this.setState({
                loading: false
              });
        alert('Login Failed. Please try again');
    });
  }

  // Go to the signup page
  goToSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }
}

export default Dashboard;
