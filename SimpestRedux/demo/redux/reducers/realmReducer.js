/*
    Load realm data when load and save data
*/

import * as actions from '../actions';
import Realm from 'realm';

const TodoSchema = {
    name: 'ToDo',
    properties: {
      id: 'int',
      text: 'string',
      completed: 'bool',
    }
}  


function saveTodo(id, text){
    // id: action.id,
    // text: action.text,
    let realm =  Realm.open({schema: [TodoSchema]})
    .then(realm => {
        realm.write(() => {
            realm.create('ToDo', {
                id: id, 
                text: text, 
                completed: false
            });
        });
    });
}

function loadTodo(){
     // Initialize a Realm with Car and Person models
     let realm =  Realm.open({schema: [TodoSchema]})
     .then(realm => { 
        let todos = realm.objects('ToDo');
        console.log('ToDo size = '+todos.length);
        // get first 5 Car objects
        return todos;
     }); 
}

export default function dataReducer (state , action) {
    switch (action.type) {
      case 'LOAD_TODO':
        return {
          ...state,
          data: [],
          isFetching: true
        }
      case 'LOAD_TODO_SUCCESS':
        return {
          ...state,
          isFetching: false,
          data: action.data
        }
      case 'LOAD_TODO_FAILED':
        return {
          ...state,
          isFetching: false,
          error: true
        }
      default:
        return state
    }
  }