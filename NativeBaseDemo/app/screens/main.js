/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Container,
   Header, 
   Title, 
   Content, 
   Footer, 
   FooterTab, 
   Badge,
   Thumbnail,
   List, 
   ListItem,
   Button, 
   Left, 
   Right, 
   Body, 
   Icon,
   Item,
   Input,
   Drawer,
  Text } from 'native-base';
import Login from './login';

const ACCESS_TOKEN = 'access_token';

export default class NativeBaseDemo extends Component {

  constructor(props){
    super(props);

    this.state = {
        isLoggedIn : false,
    };
  }

  componentWillMount() {
    // Check user name and password
    const {state} = this.props.navigation;
    var username = state.params ? state.params.username : "<undefined>";
    var password = state.params ? state.params.password : "<undefined>";

    if(username == 'loicuoi@gmail.com' && password == '123') {
      this.setState({
        isLoggedIn: true,
      });
    }

    if(this.isLoggedIn == false) {
      this.getToken();
    }

  }

  async getToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if(!accessToken) {
          console.log('Token is null ahihi');
          this.redirect('Login');
      } else {
          this.setState({accessToken: accessToken})
      }
    } catch(error) {
        console.log("Something went wrong");
        this.redirect('Login');
    }
  }
  async deleteToken() {
    try {
        await AsyncStorage.removeItem(ACCESS_TOKEN)
        this.redirect('Login');
    } catch(error) {
        console.log("Something went wrong");
    }
  }

  onLogout(){
    this.setState({isLoggedIn: false});
    this.redirect('Login');
    this.deleteToken();
  }

  confirmDelete() {
    this.props.navigation.navigate('Main');
  }

  async onDelete(){
    let access_token = this.state.accessToken
    try {
      let response = await fetch('https://afternoon-beyond-22141.herokuapp.com/api/users/'+access_token,{
                              method: 'DELETE',
                            });
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
          console.log("success sir: " + res)
          this.redirect('root');
        } else {
          let error = res;
          throw error;
        }
    } catch(error) {
        console.log("error: " + error)
    }
  }

  redirect(routeName){
    this.props.navigation.navigate(routeName, {
        name : 'Quyet',
        age : '31',
    });
  }

  render() {

    return (
      <Container>
        
        <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Day la tieu de ahihi</Title>
        </Body>
        <Right />
      </Header>


        <Content
          style={{
            padding: 20,
          }}
        >
        <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../images/avatar.png')} />
              </Left>
              <Body>
                <Text>{this.props.name} - {this.props.age}</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>

            <Button 
              onPress = {this.onLogout.bind(this)}>
              <Text>Logout</Text>
            </Button>

        </Content>
        <Footer>
        <FooterTab>

        <Button badge vertical>
            <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical>
              <Icon name="cafe" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="calendar" />
              <Text>Contact</Text>
            </Button>
        </FooterTab>
        </Footer>
      </Container>
    );
  }
}
