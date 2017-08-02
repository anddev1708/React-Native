import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
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
        <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
  }
});
