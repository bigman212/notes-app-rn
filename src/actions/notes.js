//@flow
import type {Note} from "../models";

type AddNoteAction = { type: "ADD_NOTE", note: Note }

export type NoteAction =
  | AddNoteAction;

export const addNote = (note: Note): AddNoteAction => {
  return { type: "ADD_NOTE", note: note }
};