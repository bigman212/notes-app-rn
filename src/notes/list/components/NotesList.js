//@flow
import * as React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import type {Note} from "../../../models";

type Props = {
  data: Array<Note>,
  onItemClick: () => any
}

const NotesList = ({data, onItemClick}: Props) => (
  <FlatList
    data={data}
    ItemSeparatorComponent={() => <View style={styles.separator}/>}
    renderItem={ ({item}) => (
        <TouchableOpacity onPress={onItemClick}>
          <View style={styles.view}>
          <Text  style={styles.textTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    color: 'black',
  },
  view: {
    marginBottom: 5,
    marginTop: 5,
    color: 'black'
  },
  separator: {
    height: 0.5,
    width: "80%",
    alignSelf: 'flex-start',
    backgroundColor: "#555"
  }
});

export default NotesList;
