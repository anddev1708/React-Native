import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import stackNav from './stacknav';
import styles from '../styles/main.js';

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"Tab 1",
            tabBarIcon: ({ tintColor }) => <Icon name={"group"} size={20} color={tintColor} />
        }
    },

    TabItem2: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"Tab 2",
            tabBarIcon: ({ tintColor }) => <Icon name={"truck"} size={20} color={tintColor} />
        }
    }

}, {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            labelStyle: {
                fontSize: 16,
                fontWeight: '600'
            },
            showIcon: true,
            showLabel: false,
        },
        tabBarPosition: 'bottom'
});

export default tabNav;