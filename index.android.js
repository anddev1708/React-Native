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
  BackAndroid
} from 'react-native';

import TaskList from './src/realm/TaskList';

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

export default class ReactNativeRealmNativeBaseCRUD extends Component {

 render() {
   return (
     <TaskList />
   );
 }
}

AppRegistry.registerComponent('ReduxExample', () => ReactNativeRealmNativeBaseCRUD);
