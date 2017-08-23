import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from '../components/VideoPlayer';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
               <VideoPlayer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default DetailScreen;