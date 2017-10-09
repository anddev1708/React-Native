import React, { Component } from 'react';
import {
    View,
    Text
  } from 'react-native';
  import { Actions } from 'react-native-router-flux'; // New code
  
export default class ScreenOne extends Component {
    render() {
      return (
        <View>
            <Text>Man hinh 1</Text>
            <Text
                onPress={() => Actions.pageTwo()} // New Code
            >
                Go to Screen 2
            </Text>
        </View>
      );
    }
  }