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

function todo(state = {}, action){
    switch (action.type) {
      case actions.ADD_TODO:
        saveTodo(action.id, action.text);
        return {
          id: action.id,
          text: action.text,
          completed: false
        }
      case actions.TOGGLE_TODO:
        if (state.id !== action.id){
          return state;
        }
        /*
        Concatena o state junto do complete.
        Igual a isso:
        */
        return {
          ...state,
          completed: !state.completed
        }
  
        /*
        return Object.assign({}, state, {
          completed: !state.completed
        });
        */
      default:
        return state;
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

export default function todosReducer(state = [], action){
  switch (action.type){
    case actions.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case action.LOAD_TODO: 
      console.log('Load to do nhe');
      return [...state,
            loadTodo()
        ];
    case action.LOAD_TODO_SUCCESS :
        return [...state,
            loadTodo()
        ];

    case actions.TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
}