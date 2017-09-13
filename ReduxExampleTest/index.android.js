/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  ToolbarAndroid,
  ActivityIndicator,
  BackAndroid,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import TaskList from './src/realm/TaskList';
import TaskSave from './src/realm/TaskSave';
import TaskDetail from './src/realm/TaskDetail';

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

const App = StackNavigator({
  TaskList: { screen: TaskList },
  TaskSave: { screen: TaskSave },
  TaskDetail: { screen: TaskDetail },
},{
  headerMode: 'none',
});

AppRegistry.registerComponent('ReduxExample', () => App);
