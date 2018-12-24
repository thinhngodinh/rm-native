import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import screens, {stacks} from './screenConst';

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
        [stacks.auth]: AuthStack,
        [screens.verifyToken.name]: {...screens.verifyToken.config}
    },
    {
        initialRouteName: screens.verifyToken.name
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
