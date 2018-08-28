//@flow
import * as React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type Props = {
  data: Array<any>,
  onItemClick: (index: number) => any,
  onLongPress: (index: number) => any
}

const NotesList = ({ data, onItemClick, onLongPress }: Props) => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={styles.separator}/>}
      renderItem={({ item, index }) => (
        <TouchableOpacity onLongPress={() => onLongPress(index)} onPress={() => onItemClick(index)}>
          <View style={styles.view}>
            <Text style={styles.textTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

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
