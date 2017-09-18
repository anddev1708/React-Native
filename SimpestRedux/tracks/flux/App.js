import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

export default class App extends Component {
    render() {
      return (
        <Router>
            <Scene key="root">
            <Scene key="pageOne" component={ScreenOne} title="PageOne" initial={true} />
            <Scene key="pageTwo" component={ScreenTwo} title="PageTwo" /></Scene>
        </Router>
      );
    }
}