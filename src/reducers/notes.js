//@flow
import type {Note} from "../models";
import type {NoteAction} from "../actions/notes";
import {combineReducers} from 'react-redux'

type Store = {
  +notesList: Array<Note>
}

const initialStore: Store = {
  notesList: [
    { title: "Yes", description: "YEEEEES" }
  ]
};

const noteReducer = (state: Store = initialStore, action: NoteAction) => {
  switch (action.type) {
    case "ADD_NOTE":
      const newNotes = state.notesList;
      newNotes.push(action.note);
      state = Object.assign({}, state, { notesList: newNotes });
      return state;
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = noteReducer;

export default rootReducer;