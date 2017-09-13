'use strict';
import {
  TouchableHighlight,
      ToastAndroid,
      View
} from 'react-native';
import { Container,
     Content,
     Text,
      List,
       ListItem,
        Header,
         Title,
          InputGroup,
           Input,
            Icon,
             Picker,
              Button,
              Left,
              Right,
              Body,
              Footer,
              FooterTab,
               Spinner } from 'native-base';
 
import styles from '../styles/baseStyles';
import React, {Component} from 'react';
import TaskService from './TaskService';
import TaskDetail from './TaskDetail';
 
export default class TaskSave extends Component {

  constructor(props) {
        super(props);
 
        let editObj = this.props.data;
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
 
    const { navigate } = this.props.navigation;
    navigate('TaskList');
 
  }
  back = () => {
    this.props.navigation.goBack()
  }
 
renderLoadingView() {
    return (
        <Container>
            <Content>
                <Spinner color='blue' />
            </Content>
        </Container>
    );
}

  render() {
    
    if (this.state.loading) {
        return this.renderLoadingView();
    }

      return (
       
    <Container> 
    <Header>
        <Left>
            <Button 
                transparent
                onPress={() => this.back()}
                >
                <Icon name="ios-arrow-back" />
            </Button>
        </Left>
        <Body>
            <Title>{this.state.id == null ? "New task" : "Update task" }</Title>
        </Body>
    </Header>

    <Content>
        <List>
            <ListItem>
                <InputGroup>
                    <Input 
                        onChangeText={(text) => {
                            this.setState({description: text})
                        }}
                        value={this.state.description}
                        placeholder="Description"
                        autoFocus={true}
                        label="Description"
                    />
                </InputGroup>
            </ListItem>
        </List>

        <Button 
        
            block
            success
            onPress={() => {this.save()}}
            style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
        >
            <Text>Save</Text>
        </Button>
    </Content>


</Container>
    );
  }
}