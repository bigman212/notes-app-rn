//@flow
import * as React from 'react'
import type {Note} from "../models";
import NotesList from "./List";
import {connect} from "react-redux";


type Props = {
  notesList: Array<Note>
}

class NotesListScreen extends React.Component<Props> {
  render() {
    return <NotesList data={this.props.notesList}/>
  }
}

const mapStateToProps = state => {
  return { notesList: state.notesList };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addArticle: article => dispatch(addArticle(article))
//   };
// };


export default connect(mapStateToProps)(NotesListScreen);



