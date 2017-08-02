/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { TabNavigator } from 'react-navigation';


var {
  Navigator,
  StyleSheet
} = React;

var LoginScreen = require('./app/components/Login');
var HomeScreen = require('./app/components/Home');

const MyApp = TabNavigator({
  Login : {
    screen: LoginScreen,
  },
  Home : {
    screen: HomeScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  tabBarPosition: 'bottom',
});

AppRegistry.registerComponent('HelloWorld', () => MyApp);
