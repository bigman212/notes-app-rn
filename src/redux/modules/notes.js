//@flow
import type {Note, Store} from "../../models";

const ADD_NOTE: 'notes/ADD_NOTE' = 'notes/ADD_NOTE';
const REMOVE_NOTE: 'notes/REMOVE_NOTE' = 'notes/REMOVE_NOTE';

//******************************************************************************

type AddNoteAction = { type: typeof ADD_NOTE, note: Note }
type RemoveNoteAction = { type: typeof REMOVE_NOTE, noteId: number }

type NoteAction = AddNoteAction | RemoveNoteAction;

//******************************************************************************

const add = (note: Note): AddNoteAction => {
  return { type: ADD_NOTE, note: note }
};

const remove = (noteId: number): RemoveNoteAction => {
  return { type: REMOVE_NOTE, noteId }
};

export const initialStore: Store = {
  notesList: [
    { title: "Note #1", description: "Desc #1" },
    { title: "Note #2", description: "Desc #2" }
  ]
};

//*******************************************************************************

const reducer = (state: Store = initialStore, action: NoteAction): Store => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notesList: [...state.notesList, action.note] };
    case REMOVE_NOTE:
      return state;
    default:
      return state;
  }
};

const actions = { add, remove };
export default { reducer, actions };