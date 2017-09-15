import { createStore } from 'redux';

const defaultState = { value : 0};
const reducer = (state = defaultState, action) => {
    if(action.type === 'UP') return { value : state.number + 1 };
    if(action.type === 'DOWN') return { value: state.number - 1 };
    return state;
};

const calStore = createStore(reducer);

export default calStore;