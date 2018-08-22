import {createStore} from "redux";
import notes from './modules/notes'
import {reducer as counter} from './modules/counter'
import {persistCombineReducers, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
};

const reducers = {
  notes: notes.reducer,
  counter
};

const persistedReducer = persistCombineReducers(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
