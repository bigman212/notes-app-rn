import notes from "../notes";
import configureStore from "redux-mock-store";
import type {Note} from "../../../models";

const initialStore = {
  notesList: [
    { title: "Note #1", description: "Desc #1" },
    { title: "Note #2", description: "Desc #2" }
  ]
};

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const note: Note = {
      title: 'yes',
      description: 'no'
    };
    const expectedAction = {
      type: 'notes/ADD_NOTE',
      note: note
    };
    expect(notes.actions.add(note)).toEqual(expectedAction)
  })
});

describe('>>>CHECKING NOTES',()=> {
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
  });

  it('+++ reducer for ADD_NOTE', () => {
    let state = initialStore;
    state = notes.reducer(state, notes.actions.add({title: 'new', description: 'one'}));
    expect(state).not.toEqual(initialStore)
  });
});