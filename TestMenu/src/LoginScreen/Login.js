import React, { Component } from 'react';

import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Dimensions,
 ActivityIndicator,
 AsyncStorage
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    AccessToken
   } = FBSDK;
   
import * as firebase from 'firebase';
import Firestack from 'react-native-firestack'; 
import styles from '../Styles/LoginStyle';
import HomeScreen from "../HomeScreen/index.js";

const firestack = new Firestack();

var config = {
    apiKey: "AIzaSyBc0zaY_6H2selOrjke6qQ_V7854sQj3uE",
    authDomain: "app-ban-hang-177804.firebaseapp.com",
    databaseURL: "https://app-ban-hang-177804.firebaseio.com",
    projectId: "app-ban-hang-177804",
    storageBucket: "",
    messagingSenderId: "86741313571"
};

  // Config app to check user is logged in
const firebaseApp = firebase.initializeApp(config);
const win = Dimensions.get('window');

class SocialLoginApp extends Component {

    constructor(props) {
        super(props);        

        // User ref to check login
        this.state = {
            user: null,
            isLoading: true,
            hasToken: false,
        };
    }   

    // Task to check is logged in or not
    componentDidMount() {

        that = this;
        firestack.auth.listenForAuth((evt)=> {
            if (!evt.authenticated) {
                console.log(evt.error);
            } else {

                console.log('has firebase user ', evt.user);
                // Store has login
                AsyncStorage.multiSet([
                    ["displayName", evt.user.displayName],
                    ["photoUrl", evt.user.photoUrl],
                    ["uid", evt.user.uid],
                    ["token", evt.user.token]
                ]);

                that.setState({
                    isLoading: false,
                    hasToken: true,
                })
            }
          }).then(() => {

          }).catch((err) => {

        }) ;    
         
        /* AsyncStorage.multiGet(['email', 'password']).then((data) => {
            let email = data[0][1];
            let password = data[1][1];
        
            if (email !== null){
                //Your logic
            }
                
        }); */
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

    if(this.state.hasToken) {
        return (<HomeScreen />);
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
                    
                console.log("Facebook data access token = "+data.accessToken);

                   firestack.auth.signInWithProvider('facebook', data.accessToken, '') 
                         .then((user)=>{
                           console.log("Inside then");
                           if(user) {
                                console.log("User is # null");
                                console.log(user);

                                // Store has login
                                AsyncStorage.setItem("displayName", user.displayName);
                                AsyncStorage.setItem("photoUrl", user.photoUrl);
                                AsyncStorage.setItem("uid", user.uid);
                                AsyncStorage.setItem("token", user.token);

                                this.setState({
                                    user: user,
                                    isLoading: false,
                                    hasToken: true,
                                });

                            }else{
                                console.log("User is == null");
                                this.setState({
                                    isLoading: false
                                })
                            }
                     })
                     .catch(err => {
                    // error contains any errors in downloading
                        console.log("Catch ahihi "+err);
                    });
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
 export default SocialLoginApp;