'use strict';
import {
  TouchableHighlight, Text, ToastAndroid
} from 'react-native';
import { Container, Content, List, ListItem, Header, Title, InputGroup, Input, Icon, Picker, Button, Spinner } from 'native-base';
 
import styles from '../styles/baseStyles';
import React, {Component} from 'react';
import TaskService from './TaskService';
import TaskDetail from './TaskDetail';
 
export default class TaskSave extends Component {
  constructor(props) {
    super(props);
 
    let editObj = this.props.route.editObj;
    let editIsNotNull = editObj != null;
    this.state = {
      // used to display a progress indicator if waiting for a network response.
      loading: false,
      id: editIsNotNull ? editObj.id : null,
      description: editIsNotNull ? editObj.description : ''
      }
  }
 
  save() {
    this.setState({
      loading: true
    });
   var hasError = false;
    if(this.state.description === ''){
      ToastAndroid.show('Description is required', ToastAndroid.LONG);
      hasError = true;
    }
 
    if(hasError){
      this.setState({
        loading: false
      });
      return;
    }
 
    var cond = {
        id: this.state.id != null ? this.state.id : new Date().getTime(),
        description: this.state.description
      };
    var saved = TaskService.save(cond);
 
    ToastAndroid.show('Saved!', ToastAndroid.LONG);
 
    this.props.route.callbackUpdateList();
    if(this.state.id == null){
      this.props.navigator.replace({
        component: TaskDetail,
        callbackUpdateList: this.props.route.callbackUpdateList,
        obj: saved
      });
    }else{
      this.props.navigator.pop();
    }
 
  }
  back = () => {
    this.props.navigator.pop();
  }
 
  render() {
      const content = this.state.loading ? <Content> <Spinner color="blue"> </Spinner></Content> :
 
      <Content keyboarddismissmode="interactive" keyboardshouldpersisttaps="{true}">
          <List>
             <ListItem>
                 <InputGroup>
                               <Input onchangetext={(text) => this.setState({description: text})}
                                 value={this.state.description}
                                 stackedLabel label="Description"
                               autoFocus={true}/>
                           </InputGroup>
                       </ListItem>
 
 
 
                   </List>
                    <Button 
                    Title="Save"
                    onpress={() => this.save()} 
                    style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} />
                 </Content>;
 
      return (
        <Container>
          <Header>
            <Button transparent="" onpress={() => this.back()}>
               <Icon name="ios-arrow-back">
            </Icon></Button>
            <Title>{this.state.id == null ? "New task" : "Update task" }</Title>
          </Header>
            {content}
      </Container>)
  }
}