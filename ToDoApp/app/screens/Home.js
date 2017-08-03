import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../styles/home';
import firebase from 'firebase';


class Home extends Component {

    handleLogOut() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>{firebase.auth().currentUser.email}</Text>
                <Text>{firebase.auth().currentUser.uid}</Text>
                <Button onPress={this.handleLogOut} title="Logout" />
            </View>
        );
    }
}

export default Home;
