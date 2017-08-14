
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

  module.exports = React.createClass({

  render: function() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          Hello React Native
        </Text>
          
        <Button
          onPress={() => navigate('Home')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
