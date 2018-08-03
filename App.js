/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 *
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from "react-redux";
import NotesListScreen from "./src/NotesList/NotesListScreen";
import store from "./src/store";


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <NotesListScreen/>
        </View>
      </Provider>
    );
  }
}
