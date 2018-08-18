// @flow
import {combineReducers, createStore} from "redux";
import notes from './modules/notes'
import {reducer as counter} from './modules/counter'

const reducers = {
  notes: notes.reducer,
  counter
};

// const store = createStore(notes.reducer);

const store = createStore(combineReducers(reducers));

export default store;