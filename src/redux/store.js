import {combineReducers, createStore} from "redux";
import notes from './modules/notes'

const reducers = {
  noteReducer: notes.reducer
};

const store = createStore(combineReducers(reducers));

export default store;