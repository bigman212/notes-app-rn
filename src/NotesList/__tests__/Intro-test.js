import * as React from 'react';
import NotesListScreen from '../NotesListScreen';
import renderer from 'react-test-renderer';
import {addNote} from "../../actions/notes";
import type {Note} from "../../models";


test('renders correctly', () => {
  const tree = renderer.create(<NotesListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text: Note = {
      title: 'yes',
      description: 'no'
    };
    const note: Note = {
      title: 'yes',
      description: 'no'
    };
    const expectedAction = {
      type: 'ADD_NOTE',
      note: note
    };
    expect(addNote(text)).toEqual(expectedAction)
  })
});