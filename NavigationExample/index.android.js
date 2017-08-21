/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text} from 'react-native';
import { DrawerNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import tabNav from './app/screens/tabnav';
import Login from './app/screens/login';

const drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            drawer: {
                label: 'Drawer 1',
                icon: ({ tintColor }) => <Icon name="bars" size={24} />
            },
        },
    },
    DrawerItem2: {
        screen: tabNav,
        navigationOptions: {
            drawer: {
                label: 'Drawer 2',
                icon: ({ tintColor }) => <Icon name="bars" size={24} />
            },
        },
    },
});


export default class Home extends Component{


    render(){
        return(
            <View>
                <Text>Xin chao cac ban !</Text>
            </View>
            
        );
    }
}

AppRegistry.registerComponent('NavigationExample', () => Login);
