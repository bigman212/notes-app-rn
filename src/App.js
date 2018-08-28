import * as React from 'react';
import {Text, View} from 'react-native';
import {Provider} from "react-redux";
import NotesListScreen from "./notes/list/NotesListScreen";
import {createStackNavigator} from "react-navigation";
import NotesDetailScreen from "./notes/detail/NotesDetailScreen";
import {persistor, store} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'
import {RootStack} from "./navigator";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootStack/>
        </PersistGate>
      </Provider>
    )
  }
}

