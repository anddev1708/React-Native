import React, { Component } from 'react';
import { StatusBar, Text, TextInput, View } from 'react-native';
import styles from '../styles/login';
import firebase from 'firebase';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

import Firestack from 'react-native-firestack';
const firestack = new Firestack();

const firebaseConfig = {
  apiKey: "AIzaSyDBYVoqefhBkdOsDrSkCSg9t1msOMdrGK8",
  authDomain: "todoapp-e9a91.firebaseapp.com",
  databaseURL: "https://todoapp-e9a91.firebaseio.com",
  projectId: "todoapp-e9a91",
  storageBucket: "todoapp-e9a91.appspot.com",
  messagingSenderId: "826907623033"
};

const firebaseApp = firebase.initializeApp(firebaseConfig, "Login");

class Login extends Component {

    handleLogin() {
        let email = this.state.email;
        let password = this.state.pass;
        firebaseApp.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);

            });
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <Text style={styles.title}>Login</Text>

                <TextInput onChangeText={(email) => { this.setState({ email }) } }
                    autoCapitalize='none'
                    returnKeyType='next'
                    autoFocus={true}
                    onSubmitEditing={(event) => {
                        this.refs.passwordInput.focus();
                    } }
                    style={styles.input}
                    placeholder="Email" />

                <TextInput ref='passwordInput' onChangeText={(pass) => { this.setState({ pass }) } }
                    onSubmitEditing={() => this.handleLogin()}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    returnKeyType="go" />

                    <LoginButton
                        onLoginFinished={
                        (error, result) => {
                        if (error) {
                          console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                          console.log("login is cancelled.");
                        } else {
                          AccessToken.getCurrentAccessToken().then(
                            (data) => {
                              console.log(data);
                            }
                          )
                        }
                      }
                    }
                    onLogoutFinished={() => console.log("logout.")} />
            </View>
        );
    }
}

export default Login;
