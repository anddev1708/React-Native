// actionCreator 
import { ActionTypes } from '../Constants';

export function addTodo(text) { 
    return { 
            type: ActionTypes.ADD_TODO,
            text
        }; 
} 