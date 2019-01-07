import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import screens, {stacks} from './screenConst';

import SideBar from  './_layout/leftSideBar';

// const RightDrawer = createDrawerNavigator(
//     {[screens.dashboard.name]: {...screens.dashboard.config}},
//     {
//         drawerPosition: 'right',
//         drawerType: 'slide',
//         drawerBackgroundColor: '#232323'
//     }
// );

const LeftDrawer = createDrawerNavigator(
    {
        [screens.projects.name]: {...screens.projects.config},
        [screens.members.name]: {...screens.members.config},
        [screens.settings.name]: {...screens.settings.config}
    },
    {
        drawerType: 'slide',
        drawerBackgroundColor: '#232323',
        contentComponent: SideBar
    }
);

const AppStack = LeftDrawer;

const AuthStack = createStackNavigator({
    [screens.login.name]: {...screens.login.config}
})

const AppNavigator = createSwitchNavigator(
    {
        [stacks.app]: AppStack,
        [stacks.auth]: AuthStack
    },
    {
        initialRouteName: stacks.auth
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
