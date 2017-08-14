/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
 
import DetailScreen from './app/screens/Detail.js';
import HomeScreen from './app/screens/Home.js';

// Using staskNavigation
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

AppRegistry.registerComponent('FootballLiveStream', () => SimpleApp);
