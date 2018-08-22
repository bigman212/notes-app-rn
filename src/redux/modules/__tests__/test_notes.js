import notes from "../notes";
import configureStore from "redux-mock-store";
import type {Note} from "../../../models";

const initialStore = {
  notesList: [
    { title: "Note #1", description: "Desc #1" },
    { title: "Note #2", description: "Desc #2" }
  ]
};

describe('>>>> ACTIONS', () => {
  const note: Note = {
    title: 'yes',
    description: 'no'
  };

  it('++++ ADD_NOTE', () => {
    const expectedAction = {
      type: 'notes/ADD_NOTE',
      note: note
    };
    expect(notes.actions.add(note)).toEqual(expectedAction)
  });

  it('++++ REMOVE_NOTE', () =>{
    const expectedAction = {
      type: notes.actions.types.REMOVE_NOTE,
      noteId: 0
    };
    expect(notes.actions.remove(0)).toEqual(expectedAction)
  })
});

describe('>>> REDUCER',()=> {
  const mockStore = configureStore();
  let store;
  const note: Note = {
        title: 'new',
        description: 'desc'
      };

  beforeEach(() => {
    store = mockStore(initialStore);
  });

  it('+++ Testing store', () => {
    expect(store.getState()).not.toBeUndefined();
  });

  // it('+++ Testing ', () => {
  //
  //   store.dispatch(notes.actions.add(note));
  //   const action = store.getActions();
  //   expect(action[0].type).toBe("notes/ADD_NOTE");
  // });

  it('+++ reducer for ADD_NOTE', () => {
    store = notes.reducer(initialStore, notes.actions.add(note));
    expect(store).not.toEqual(initialStore);
    expect(store.notesList.length).toEqual(initialStore.notesList.length - 1)
  });

  it('+++ reducer for REMOVE_NOTE', () => {
    store = notes.reducer(initialStore, notes.actions.remove(0));
    // Note #1 should go
    expect(store.notesList.length).toEqual(initialStore.notesList.length - 1);
    console.log(store);
    expect(store.notesList).not.toEqual(initialStore.notesList);
  })
});