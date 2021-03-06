'use strict';
import {
  Alert,
  Text,
  TouchableHighlight,
  ScrollView,
  ToastAndroid,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, InputGroup, Input } from 'native-base';
import styles from '../styles/baseStyles';
import React, {Component} from 'react';
 
import TaskSave from './TaskSave';
import TaskService from './TaskService';
 
export default class TaskDetail extends Component {
  constructor(props) {
    super(props);
  }
 
  edit(){
      this.props.navigator.push({
        component: TaskSave,
        callbackUpdateList: this.props.route.callbackUpdateList,
        editObj: this.props.route.obj
      });
    }
 
    delete(){
      Alert.alert(
          'Delete',
          'Do you want to delete this task?',
          [
            {text: 'Cancelar', onPress: () => console.log('Cancel Pressed!')},
            {text: 'Yes', onPress: () => {
              TaskService.delete(this.props.route.obj);
              this.props.route.callbackUpdateList();
              this.props.navigator.pop();
            }},
          ]
        )
    }
 
  back = () => {
    this.props.navigation.goBack();
  }
 
  render() {
    const {state} = this.props.navigation;
    let obj = state.params.obj;
    const content =  <View>
        <ScrollView>
            <Text style="{styles.textLabel}">
              Description
            </Text>
            <Text style="{styles.textProp}">
              {obj.description}
            </Text>
          </ScrollView>
      </View>;
    // A simple UI with a toolbar, and content below it.
        return (
          <Container>
            <Header>
              <Button 
                transparent
                 onPress={() => this.back()}>
                 <Icon name="ios-arrow-back" />
            </Button>
              <Title>Task</Title>
              <Button transparent="" onpress={() => this.edit()}>
                 <Icon name="edit" />
              </Button>

              <Button transparent="" onpress={() => this.delete()}>
                 <Icon name="trash" />
                </Button>
            </Header>
              {content}
        </Container>)
  }
}