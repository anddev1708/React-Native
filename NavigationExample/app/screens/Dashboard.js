import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import MapView from './map';

class Dashboard extends Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={"glass"} size={30} color={tintColor} />
        ),
      };
      
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to Dashboard Screen</Text>
                <Button onPress={() => this.props.navigation.navigate("Detail")} title="Go to Detail" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Dashboard;