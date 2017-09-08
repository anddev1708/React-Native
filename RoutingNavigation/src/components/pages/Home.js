import React, {Component} from 'react';
import {Text, 
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>{
                    Actions.news({ desc: 'Hello React Native' })
                }} >
                <Text>
                    Go to News
                </Text>
            </TouchableOpacity>
        );
    }
}