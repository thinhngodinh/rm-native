import LoginScreen from './login/login';
import DashboardScreen from './dashboard/dashboard';
import AccountScreen from './account/account';
import VerifyingTokenScreen from './VerifyingToken/verifyingToken'

const screens = {
    verifyToken: {
        name: '_VERIFY_USER_',
        config: {screen: VerifyingTokenScreen}
    } ,
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
    auth: 'AUTHENTICATION_STACK',
    verifyToken: '_VERIFY_USER_'
}

export default screens;
