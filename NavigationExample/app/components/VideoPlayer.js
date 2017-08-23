import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

import Video from 'react-native-video';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'stretch',
        duration: 1.0,
        currentTime: 0.0,
        paused: false,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Ahihi video player</Text>
                 <Video 
                    source={{uri: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8', mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
                    rate={1.0}                   // 0 is paused, 1 is normal.
                    volume={1.0}                 // 0 is muted, 1 is normal.
                    muted={false}                // Mutes the audio entirely.
                    paused={false}               // Pauses playback entirely.
                    resizeMode="cover"           // Fill the whole screen at aspect ratio.
                    repeat={true}                // Repeat forever.
                    onLoadStart={this.loadStart} // Callback when video starts to load
                    onLoad={this.setDuration}    // Callback when video loads
                    onProgress={this.setTime}    // Callback every ~250ms with currentTime
                    onEnd={this.onEnd}           // Callback when playback finishes
                    onError={this.videoError}    // Callback when video cannot be loaded
                    style={styles.backgroundVideo} />
            </View>
        );
    }
}


const sr = Dimensions.get('window');
var NORMAL_WIDTH = sr.w;
var NORMAL_HEIGHT = NORMAL_WIDTH*2/3;
var FULL_WIDTH = sr.h;
var FULL_HEIGHT = sr.w;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        width: 600,
        height: 400,
    },
    videoNormalFrame: {
        position: 'absolute',
        top:0,
        left: 0,
        width: NORMAL_WIDTH,
        height: NORMAL_HEIGHT,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 600,
        height: 200,
      },
});

module.exports = VideoPlayer;

