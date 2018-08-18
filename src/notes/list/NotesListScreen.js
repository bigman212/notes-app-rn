//@flow
import * as React from 'react';
import NotesList from "./components/NotesList";
import {connect} from "react-redux";
import {StyleSheet, TextInput, View} from "react-native";
import type {NavigationScreenProp} from "react-navigation";
import notes from "../../redux/modules/notes";
import type {Note} from "../../models";
import type {Dispatch} from 'redux'
import Button from "./components/Button";

type Props = {
  notesList: Array<Note>,
  navigation: NavigationScreenProp<*>,
  addNote: (note: Note) => void
}

type State = {
  currentText: string
}

class NotesListScreen extends React.Component<Props, State> {
  state = {
    currentText: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={ { flexDirection: 'row' }}>
          <TextInput style={{backgroundColor: 'black', flex: 5}} onChangeText={(text: string) => this.setState({currentText: text})}/>
          <Button style={{flex: 1}} text={'Add'} onClick={this._addNewNote}/>
        </View>
        <NotesList data={this.props.notesList} onItemClick={this._goToDetailedNote}/>
      </View>
    )
  }

  _goToDetailedNote = () => {
    this.props.navigation.navigate('NotesDetail')
  };

  _addNewNote = () => {
    const newNote: Note = {
      title: 'yes',
      description: 'yes'
    };
    this.props.addNote(newNote);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  }
});

const mapStateToProps = (state) => {
  return { notesList: state.notes.notesList };
};

function mapDispatchToProps (dispatch: Dispatch<any>) {
  return {
    addNote: (note: Note) => {
      dispatch(notes.actions.add(note))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesListScreen);



