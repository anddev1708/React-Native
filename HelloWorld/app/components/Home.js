
import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation';

var ListScreen = require('./List');
var DetailScreen = require('./Detail');

const App = StackNavigator({
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen },
});

module.exports = App;
