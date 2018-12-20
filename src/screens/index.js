import { createStackNavigator, createAppContainer } from "react-navigation";
import screen from './screenConst';

const AppNavigator = createStackNavigator(
    {
        [screen.dashboard.name]: {...screen.dashboard.config},
        [screen.account.name]: {...screen.dashboard.config},
        [screen.login.name]: {...screen.login.config}
    },{
        initialRouteName: screen.login.name
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
