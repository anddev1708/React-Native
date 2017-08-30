import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import { Container, Content, Picker, Button, Text } from "native-base";
import LoginStyle from './Styles/LoginStyle.js';
import HomeScreen from "./HomeScreen/index.js";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    // Check login state here

    this.setState({ isReady: true });
  }

  renderLoadingView() {
    return (
        <View style={LoginStyle.loading}>
            <ActivityIndicator animating size="large" />
            <Text>
                Loading ...
            </Text>
        </View>
    );
}

  render() {
    if (!this.state.isReady) {
        return this.renderLoadingView();
    }
    return <HomeScreen />;
  }
}
