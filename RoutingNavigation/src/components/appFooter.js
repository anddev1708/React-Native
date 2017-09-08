import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Footer, FooterTab, Icon, Button, Text} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active onPress={Actions.feed}><Icon name="ios-egg"/>
            <Text>Feed</Text>
          </Button>
          <Button onPress={Actions.news}><Icon name="paper"/>
            <Text>News</Text>
          </Button>
          <Button onPress={Actions.about}><Icon name="contact"/>
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

module.export = AppFooter;