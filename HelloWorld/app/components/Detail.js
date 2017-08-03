import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput
} from 'react-native';

module.exports = React.createClass({

  render: function() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <Image style={styles.image} source={require('../images/image.jpg')} />
        <Text>
          Details Screen
        </Text>

        <TextInput
        style={styles.nameInput}
        onChange={this.onNameChanged}
        placeholder='Who should be greeted?'/>

        <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
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
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    height: 36,
    padding: 4,
    margin: 24,
    fontSize: 18,
    borderWidth: 1,
  }
});
