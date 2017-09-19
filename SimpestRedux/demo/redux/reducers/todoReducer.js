import * as actions from '../actions';

function todo(state = {}, action){
    switch (action.type) {
      case actions.ADD_TODO:
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



export default function todosReducer(state = [], action){
  switch (action.type){
    case actions.ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case actions.TOGGLE_TODO:
      return state.map((t) => todo(t, action));
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
      return state;
  }
}