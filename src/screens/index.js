import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import screens, {stacks} from './screenConst';

// const leftDrawer = createDrawerNavigator(
//     {},
//     {
//         drawerPosition: 'left',
//         drawerType: 'slide' 
//     }
// );
// const rightDrawer = createDrawerNavigator(
//     {},
//     {
//         drawerPosition: 'right',
//         drawerType: 'slide' 
//     }
// );

const AppStack = createStackNavigator(
    {
        [screens.dashboard.name]: {...screens.dashboard.config},
        [screens.account.name]: {...screens.dashboard.config}
    },{
        initialRouteName: screens.dashboard.name
    }
);

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
