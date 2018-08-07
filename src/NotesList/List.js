//@flow
import * as React from 'react'
import type {Note} from "../models";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type Props = {
  data: Array<Note>,
  onClick: () => void
}

const NotesList = (props: Props) => (
  <FlatList
    data={props.data}
    renderItem={({ item }) => {
      return (
        <View>
          <TouchableOpacity onPress={props.onClick}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
          </TouchableOpacity>
        </View>
      )
    }}
    ItemSeparatorComponent={() => <View
      style={{ height: 1, width: "100%", backgroundColor: "#CED0CE", }}/>
    }
  />
);

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'black'
  }
});

export default NotesList;
