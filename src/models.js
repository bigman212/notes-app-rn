//@flow

export type Note = {
  title: string,
  description: string
}

export type Store = {
  +notesList: Array<Note>,
  +number: number
}

