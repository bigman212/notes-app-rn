import * as React from 'react';
import NotesListScreen from '../NotesListScreen';
import type {Note} from "../../../models";
import configureStore from 'redux-mock-store'
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import notes from "../../../redux/modules/notes";


configure({ adapter: new Adapter() });

const initialStore = {

  notesList: [
    { title: "Note #1", description: "Desc #1" },
    { title: "Note #2", description: "Desc #2" }
  ]
};

describe('test component', () => {
  const mockStore = configureStore();
  const store = mockStore(initialStore);
  const tree = shallow(<NotesListScreen store={store}/>);

  // test('renders correctly', () => {
  //   expect(tree).toMatchSnapshot();
  // });

  it('simulates click events', () => {
    expect(tree.props.someProp).toEqual('notesList');
  });
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

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=> {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialStore);
  });

  it('Testing store', () => {
    expect(store.getState().notesList.length).toEqual(2);
  });

  it('Testing actions', () => {
    const note: Note = {
      title: 'new',
      description: 'desc'
    };
    store.dispatch(notes.actions.add(note));

    const action = store.getActions();
    expect(action[0].type).toBe("notes/ADD_NOTE");
    // expect(store.getState().notesList.length).toEqual(3)
  });

  it('+++ reducer for ADD_INPUT', () => {
    let state = initialStore;
    state = notes.reducer(state, notes.actions.add({title: 'new', description: 'one'}));
    expect(state).toEqual(initialStore)
  });
});