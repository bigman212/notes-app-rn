import {createStackNavigator} from "../flow-typed/npm/react-navigation_v2.x.x";
import NotesListScreen from "./notes/list/NotesListScreen";
import NotesDetailScreen from "./notes/detail/NotesDetailScreen";


export const SCREENS = {
  NotesList: 'NotesList',
  NotesDetail: 'NotesDetail'
};

export const RootStack = createStackNavigator({
    [SCREENS.NotesList]: {
      screen: NotesListScreen,
      navigationOptions: {
        header: null
      }
    },
    [SCREENS.NotesDetail]: NotesDetailScreen
  },
  {
    initialRouteName: SCREENS.NotesList,
  }
);