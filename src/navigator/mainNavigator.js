import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213066Navigator from '../features/BlankScreen213066/navigator';
import BlankScreen113065Navigator from '../features/BlankScreen113065/navigator';
import BlankScreen313059Navigator from '../features/BlankScreen313059/navigator';
import BlankScreen213058Navigator from '../features/BlankScreen213058/navigator';
import BlankScreen113057Navigator from '../features/BlankScreen113057/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213066: { screen: BlankScreen213066Navigator },
BlankScreen113065: { screen: BlankScreen113065Navigator },
BlankScreen313059: { screen: BlankScreen313059Navigator },
BlankScreen213058: { screen: BlankScreen213058Navigator },
BlankScreen113057: { screen: BlankScreen113057Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
