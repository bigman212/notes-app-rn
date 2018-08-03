import {createStore} from "redux";
import rootReducer from "../reducers/notes";

const store = createStore(rootReducer);

export default store;