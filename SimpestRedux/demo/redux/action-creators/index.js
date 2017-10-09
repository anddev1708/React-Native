import * as actions from '../actions';

let nextTodoId = 0;

export function addTodo(text){
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export function setVisibilityFilter(filter){
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export function toggleTodo(id){
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export function deleteTodo(id){
    return {
      type: 'DELETE_TODO',
      id
    }
  }

// Sync load cart
export const loadTodoSuccess = (todos) => {
  return {
    type: 'LOAD_TODO_SUCCESS',
    todos
  }
};

// Load data failed
export const loadTodoFailed = () => {
  return {
    type: 'LOAD_TODO_FAILED'
  }
};

// Begin load to do
export function loadTodo(){
  return {
    type: 'LOAD_TODO',
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(loadTodo());
    let realm =  Realm.open({schema: [TodoSchema]})
    .then(realm => { 
       let todos = realm.objects('ToDo');
       console.log('ToDo size = '+todos.length);
       // get first 5 Car objects
       loadTodoSuccess(todos);
    }); 
  }
}
