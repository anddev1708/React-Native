import React, {
  Component
} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from '../styles/Styles.js';

class ListItem extends Component {
  render({onPress} = this.props) {
    const { navigate } = this.props.navigation;
    // We are going to return a simple list item with just a title for now
    return (
      <View style={styles.listItem}>
        <TouchableHighlight onPress={() => navigate('Detail',
              {   Song : this.props.Song,
                  Artist: this.props.Artist,
                  Album : this.props.Album ,
                  AlbumArt : this.props.AlbumArt
                }
              )}
              activeOpacity={0.7}>
          <Text style={styles.listItemTitle}>{this.props.task.name}</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onTaskCompletion}>
          <Image style={styles.listItemAction} source={require('../images/delete.png')} />
        </TouchableHighlight>
        {/*Icon taken from google's material icon pack: https://design.google.com/icons/#ic_done*/}
      </View>
    );
  }
}

module.exports = ListItem;
