//@flow
import * as React from 'react';
import NotesList from "./List";
import {connect} from "react-redux";
import {StyleSheet, View} from "react-native";
import type {NavigationScreenProp} from "react-navigation";
import notes from "../../redux/modules/notes";
import type {Note} from "../../models";
import type {Dispatch} from 'redux'

type Props = {
  notesList: Array<Note>,
  navigation: NavigationScreenProp<*>,
  addNote: (note: Note) => void
}

class NotesListScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NotesList data={this.props.notesList} onItemClick={this._goToDetailedNote}/>
      </View>
    )
  }

  _goToDetailedNote = () => {
    this.props.navigation.navigate('NotesDetail')
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
});

const mapStateToProps = state => {
  return { notesList: state.notesList };
};

function mapDispatchToProps (dispatch: Dispatch<any>) {
  return {
    addNote: (note: Note) => {
      dispatch(notes.actions.add(note))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesListScreen);



