import LoginScreen from './login/login';
import DashboardScreen from './dashboard/dashboard';
import AccountScreen from './account/account';

const screen = {
    dashboard:{
        name: '_DASHBOARD',
        config: {screen: DashboardScreen}
    } ,
    login:{
        name: '_LOGIN',
        config: {screen: LoginScreen}
    } ,
    account:{
        name: '_ACCOUNT',
        config: {screen: AccountScreen}
    }
};

export default screen;
