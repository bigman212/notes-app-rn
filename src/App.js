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
import NotesListScreen from "./notes/list/NotesListScreen";
import {createStackNavigator} from "react-navigation";
import NotesDetailScreen from "./notes/detail/NotesDetailScreen";
import store from "./redux/store";

const RootStack = createStackNavigator(
  {
    NotesList: NotesListScreen,
    NotesDetail: NotesDetailScreen
  },
  {
    initialRouteName: 'NotesList',
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}

