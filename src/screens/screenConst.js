import LoginScreen from './login/login';
import DashboardScreen from './dashboard/dashboard';
import AccountScreen from './account/account';

const screens = {
    login:{
        name: '_LOGIN_',
        config: {screen: LoginScreen}
    } ,
    dashboard:{
        name: '_DASHBOARD_',
        config: {screen: DashboardScreen}
    } ,
    account:{
        name: '_ACCOUNT_',
        config: {screen: AccountScreen}
    }
};

export const stacks = {
    app: 'APPLICATION_STACK',
    auth: 'AUTHENTICATION_STACK'
}

export default screens;
