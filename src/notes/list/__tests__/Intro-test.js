import * as React from 'react';
import NotesListScreen from '../NotesListScreen';
import configureStore from 'redux-mock-store'
import {shallow} from 'enzyme';

const initialStore = {
  notesList: [
    { title: "Note #1", description: "Desc #1" },
    { title: "Note #2", description: "Desc #2" }
  ]
};
const mockStore = configureStore();
const store = mockStore(initialStore);

describe('test component', () => {
  const tree = shallow(<NotesListScreen store={store}/>);

  // test('renders correctly', () => {
  //   expect(tree).toMatchSnapshot();
  // });

  it('simulates click events', () => {
    expect(tree.props().hasOwnProperty('notesList')).toBeTruthy();
  });
});