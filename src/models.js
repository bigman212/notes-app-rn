//@flow

export type Note = {
  title: string,
  description: string
}

export type Store = {|
  +notesList: Array<Note>,
  +number: 0
|}

export const initialStore: Store = {
  notesList: [
    { title: "Note #1", description: "Desc #1" },
    { title: "Note #2", description: "Desc #2" }
  ],
  number: 0
};

