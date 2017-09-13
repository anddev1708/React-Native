import React, { Component, PropTypes } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View, TouchableOpacity } from 'react-native';

class Test extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <TouchableOpacity 
                    onPress={() => {this.props.onTest()}}>
                    <Text>Test nhe</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Test.propTypes = {
    onTest: PropTypes.func,
};

export default Test;