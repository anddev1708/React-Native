import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Dashboard from './Dashboard';

import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Dimensions,
 ActivityIndicator
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
 LoginButton,
 AccessToken
} = FBSDK;

import * as firebase from 'firebase';
import Firestack from 'react-native-firestack'; 
const firestack = new Firestack();

var config = {
    apiKey: "AIzaSyD7TokWm_oH7qST2pq8Dom5j5ugW5Z_qqM",
    authDomain: "navigation-example-977aa.firebaseapp.com",
    databaseURL: "https://navigation-example-977aa.firebaseio.com",
    projectId: "navigation-example-977aa",
    storageBucket: "navigation-example-977aa.appspot.com",
    messagingSenderId: "1056469814733"
  };

  // Config app to check user is logged in
const firebaseApp = firebase.initializeApp(config);


class SocialLoginApp extends Component {

    constructor(props) {
        super(props);        

        // User ref to check login
        this.state = {
            user: null,
            isLoading: true,
        };
    }   

    // Task to check is logged in or not
    componentDidMount() {
        var that = this;
        // start listening for firebase updates
        firebase.auth().onAuthStateChanged(function(user) {
            console.log(user); 
            if(user) {
                console.log("User is # null");
              that.setState({
                user: user,
                isLoading: false
              })
            }else{
                console.log("User is == null");
              that.setState({
                isLoading: false
              })
            }
          });
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator animating size="large" />
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }

 render() {

    if (this.state.isLoading) {
        return this.renderLoadingView();
    }

    if(!this.state.user) {
        return (<Dashboard />);
    }

   return (
     <View style={styles.container}>
       <View style={styles.top}>
         <Text style={styles.textheader}>
           Social Login
         </Text>
       </View>
       <View style={styles.bottom}>
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
                   firestack.auth.signInWithProvider('facebook', data.accessToken, '') 
                         .then((user)=>{
                           console.log("Inside ");
                           console.log(user); 
                     }) 
                 }
               )
             }
           }
         }
         onLogoutFinished={() => console.log("logout.")}/>
       </View>
     </View>
   );
 }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C2833',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent: 'center', 
    },
    top:{
        flex:1,
        justifyContent: 'center', 
    },
    bottom:{
        flex:1,
    },
    textheader:{
        color:'white',
        fontSize: 50
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SocialLoginApp;