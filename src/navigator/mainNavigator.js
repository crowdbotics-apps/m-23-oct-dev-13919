import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313059Navigator from '../features/BlankScreen313059/navigator';
import BlankScreen213058Navigator from '../features/BlankScreen213058/navigator';
import BlankScreen113057Navigator from '../features/BlankScreen113057/navigator';
import BlankScreen013045Navigator from '../features/BlankScreen013045/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313059: { screen: BlankScreen313059Navigator },
BlankScreen213058: { screen: BlankScreen213058Navigator },
BlankScreen113057: { screen: BlankScreen113057Navigator },
BlankScreen013045: { screen: BlankScreen013045Navigator },

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
