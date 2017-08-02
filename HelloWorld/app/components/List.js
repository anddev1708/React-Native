'use strict'
import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList
} from 'react-native';

module.exports = React.createClass({

  render: function() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <Text>
          List Screen Example
        </Text>

        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

        <Button
          onPress={() => navigate('Detail')}
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
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  },
  image : {
    width: 200,
    height: 200
  },
  icon: {
    width: 26,
    height: 26,
  },
});
