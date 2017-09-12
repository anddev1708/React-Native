import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, InputGroup, Input, List, ListItem } from 'native-base';
import {
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/baseStyles';
 
import TaskSave from './TaskSave';
import TaskDetail from './TaskDetail';
import TaskService from './TaskService';
 
import TaskItem from './TaskItem';
import Realm from 'realm';



export default class TaskList extends Component {
 
  constructor(props) {
    super(props);
 
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state = {
//           dataSource: ds.cloneWithRows([
//             {description: 'initial'}
//           ]),
//           search: "",
//           refreshing: false,
//         };

    this.state = {
        albums: ["foo", "bar", "baz"],
         search: "",
        refreshing: false,
        realm : null,
    };
  }
 
  showItem(obj){
      this.props.navigator.push({
        component: TaskDetail,
        callbackUpdateList: this.callbackUpdateList,
        obj: obj
      });
 
  }
 

  componentWillMount(){
    //this.updateList();

    const PersonSchema = {
        name: 'Person',
        properties: {
          // The following property types are equivalent
          name:   {type: 'string'},
          phone: 'string',
        }
    };
    // Get realm data here
    //  Initialize a Realm with Car and Person models
    Realm.open({
        schema: [PersonSchema],
        schemaVersion: 1,
        path: 'xxx.realm',
        migration: (oldRealm, newRealm) => {
          // only apply this change if upgrading to schemaVersion 1
          if (oldRealm.schemaVersion < 1) {
            const oldObjects = oldRealm.objects('Person');
            const newObjects = newRealm.objects('Person');
      
            // loop through all objects and set the name property in the new schema
            for (let i = 0; i < oldObjects.length; i++) {
              newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
            }
          }
        }
    })
      .then(realm => {
        
        let persons = realm.objects('Person').snapshot();
        this.setState({
            realm: realm,
            albums: persons,
        });
      }).catch(err => {
        console.log('Loi cmnr #'+ err);
      });

  }
 
  render() {
    return (
        <Container>
        <Header>
        <Button onpress={() => console.log("Home")}>
                    <Icon name="ios-home">
                  </Icon>
                  </Button>
                   <Title>Tasks</Title>
                   
                    <TouchableHighlight onpress={() => console.log('Tai sao ha nguoi')}>

                   
                      <Icon name="ios-add">
                    </Icon>
                    
                    </TouchableHighlight>

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

            <List dataArray={this.state.albums}
                renderRow={(item) =>
                    <ListItem>
                        <Text>{item}</Text>
                    </ListItem>
                }>
        </List>

                         {/* <List dataArray={this.state.dataSource} 
                         renderrow={this._renderItem.bind(this)}>
                        </List> */}
        </Content>
    </Container>
    );
  }
 
  updateList(){
    this.setState({refreshing: true});

    var all = TaskService.search(this.state.search);

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(all)
    });

    this.setState({refreshing: false});
  }
 
  openSave() {
    console.log('Ahihi, save new item');
     this.props.navigator.push({
       component: TaskSave,
       callbackUpdateList: this.callbackUpdateList,
     });
 }
 
  _onActionSelected = (position) => {
    console.log(position);
    if(position == 0){
      this.props.navigator.push({
        component: TaskSave,
        callbackUpdateList: this.callbackUpdateList,
      });
    }
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
     <TouchableHighlight onpress={() => this.showItem(obj)}>
        <View>
          <TaskItem obj="{obj}/"></TaskItem>
        </View>
     </TouchableHighlight>
    );
  }
}