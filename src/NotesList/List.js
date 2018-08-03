//@flow
import * as React from 'react'
import type {Note} from "../models";
import {FlatList, Text} from "react-native";

type Props = {
  data: Array<Note>
}

const NotesList = (props: Props) => (
  <FlatList
    data={props.data}
    renderItem={({ item }) => <Text>{item.title}</Text>}
  />
);

export default NotesList;
