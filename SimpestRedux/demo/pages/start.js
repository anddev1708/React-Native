import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  ListView,
  View,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/action-creators/index';
let nextTodoId = 0;

import { Text
    , Container
    , Content
    , Left
    , Body
    , Button
    , List
    , ListItem
    , Icon
    , Right
    , InputGroup
    , Title } from "native-base";

const CatSchema = {
    name: 'Cat',
    properties: {
        id: 'string',
        text: 'string',
        completed: 'string',
    }
}

class Start extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  componentWillMount(){
    this.loadTodo();
  }

  deleteToDo(id){
      console.log('Xoa todo by ID');
  }

  getTodos(text){
    this.state.text = '';
     this.props.dispatch(actionCreators.addTodo(text));
  }

  toggleTodo(id){
    this.props.dispatch(actionCreators.toggleTodo(id));
  }

  loadTodo(){
      console.log('try to load todo');
      this.props.dispatch(actionCreators.fetchData());
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <InputGroup>
            <TextInput
                placeholder={'ADD TODO HERE'}
                style={{height: 40, borderColor: 'gray', flex: 1, flexDirection: 'row' , borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
        </InputGroup>

      <Button onPress={() => this.getTodos(this.state.text)}>
        <Text> Add Todo </Text>
      </Button>

        <List dataArray={this.props.todos}
            renderRow={(todo) =>
              <ListItem>
                <Text
                    key={todo.id}
                    style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
                    onPress={() => this.toggleTodo(todo.id)}>
                    {todo.text}
                    </Text>
                    <Icon 
                        onPress={() => this.deleteToDo(todo.id)}
                        name="trash" />
              </ListItem>
            }>
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function mapStateToProps(state) {
  return { todos: state.todos };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);