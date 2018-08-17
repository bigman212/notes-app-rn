//@flow
import * as React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SwipeListView} from "react-native-swipe-list-view";
import type {Note} from "../../../models";

type Props = {
  data: Array<Note>,
  onItemClick: () => void
}

const NotesList = ({data, onItemClick}: Props) => (
  <SwipeListView
    useFlatList
    data={data}
    renderItem={ (data, rowMap) => (
        <TouchableOpacity onPress={onItemClick}>
          <View style={styles.view}>
          <Text style={styles.text}>{data.title}</Text>
          <Text style={styles.text}>{data.description}</Text>
          </View>
        </TouchableOpacity>
    )}
    renderHiddenItem={ (data, rowMap) => (
      <View>
        <Text>Left</Text>
        <Text>Right</Text>
      </View>
    )}
    leftOpenValue={75}
    rightOpenValue={-75}
  />
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
  },
  view: {
    color: 'black'
  }
});

export default NotesList;
