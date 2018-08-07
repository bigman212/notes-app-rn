//@flow
import * as React from 'react'
import type {Note} from "../models";
import NotesList from "./List";
import {connect} from "react-redux";
import {StyleSheet, View} from "react-native";
import type {NavigationScreenProp} from "react-navigation";

type Props = {
  notesList: Array<Note>,
  navigation: NavigationScreenProp<*>,
}

class NotesListScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <NotesList data={this.props.notesList} onClick={this._onItemClick}/>
      </View>
    )
  }

  _onItemClick = () => {
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addArticle: article => dispatch(addArticle(article))
//   };
// };


export default connect(mapStateToProps)(NotesListScreen);



