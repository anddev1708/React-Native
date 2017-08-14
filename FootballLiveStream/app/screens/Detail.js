import React, { Component } from 'react';
import { StatusBar, Text, TextInput, View } from 'react-native';
import styles from '../styles/Detail.js';
import firebase from 'firebase';
import YouTube from 'react-native-youtube';

class Detail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text>Play Video Screen</Text>

                
                <YouTube
                    videoId="F2tq1H_okXg"   // The YouTube video ID
                    play={true}             // control playback of video with true/false
                    fullscreen={true}       // control whether the video should play in fullscreen or inline
                    loop={true}             // control whether the video should loop when ended
                    apiKey="AIzaSyANoTUm1l-_KUNa5JMEy4jInS7AUynVfMY"
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}

                    style={{ alignSelf: 'stretch', height: 300 }}
                    />
                
            </View>
        );
    }
}

export default Detail;
