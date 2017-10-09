import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const createStoreWithMiddleWare = applyMiddleware()(createStore)

export default function (initialState = {}){
    return createStoreWithMiddleWare(rootReducer, initialState)
}