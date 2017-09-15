import React, {Component} from 'react';
import TrackList from './components/index';
import { configureStore } from './Store';
import * as actions from './actions';
import { Provider } from 'react-redux';

const tracks = [{
    id: 1,
    title: 'Em của ngày hôm qua'
  },{
    id: 2,
    title: 'Cơn mưa ngang qua'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
            <TrackList />
        </Provider>
      );
    }
}