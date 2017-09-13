import React, { Component } from 'react';
import { Container,
     Header,
      Title,
       Content,
        Footer,
         FooterTab,
          Button,
           Icon,
            InputGroup,
             Input,
              List,
              Left,
              Right,
              Body,
               ListItem } from 'native-base';
import {
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/baseStyles';
 
import TaskSave from './TaskSave';
import TaskDetail from './TaskDetail';
import TaskService from './TaskService';
import TaskItem from './TaskItem';
import Realm from 'realm';



export default class TaskList extends Component {
 
    static navigationOptions = {
        title: 'Task list',
    };

    
  constructor(props) {
    super(props);
    this.state = {
        albums: null,
        search: "",
        refreshing: false,
        realm : null,
    };
  }
 
  showItem(obj){

    const { navigate } = this.props.navigation;

    
        console.log('Ahihi, save new item');

        navigate('TaskDetail',{
            obj: obj
        });
 
  }
 

  componentWillMount(){
    this.updateList();
  }
 
  render() {
    
    return (
        <Container>
        <Header>
                <Left>
                <Button 
                    transparent
                    onPress={() => {this.props.navigation.goBack()}}>
                    <Icon name="ios-home" />
                  </Button>
                  </Left>
                  <Body>
                   <Title>Tasks</Title>
                   </Body>

                   <Right>
                    <Button 
                        transparent
                        onPress={() => {this.openSave()}}>
                      <Icon name="ios-add" />
                    </Button>
                    </Right>
            </Header>
        <Content>

        <InputGroup>
            <Icon name="ios-search" />
            <Input placeholder='Search' 
                value={this.state.search} 
                onChangeText={(text) => {
                    this.state.search = text;
                    this.updateList();
                }}
                />
        </InputGroup>

            <List 
                dataArray={this.state.albums}
                renderRow={(item) => this._renderItem(item)}
                >
        </List>

        </Content>
    </Container>
    );
  }
 
  updateList(){
    this.setState({refreshing: true});

    var all = TaskService.search(this.state.search);
    this.setState({
        albums: all,
    });

    this.setState({refreshing: false});
  }
 
  openSave() {
    const { navigate } = this.props.navigation;

    console.log('Ahihi, save new item');

    navigate('TaskSave',{
        route : this.callbackUpdateList,
    });
 }
 
  _onActionSelected = (position) => {

    console.log('On item selected');
    const { navigate } = this.props.navigation;
    navigate('TaskSave',{
        data : this.state.albums[position],
    });
  };
 
  callbackUpdateList = () => {
    console.log('callbackUpdateList');
    this.updateList();
  }
 
  _renderItem(obj) {
    if(obj == null){
      return null;
    }
    return (
     <View>
            <TouchableOpacity onPress={() => this.showItem(obj)}>
                <TaskItem obj={obj} />
            </TouchableOpacity>
        </View>
    );
  }
}