import LoginScreen from './login/login';
import DashboardScreen from './dashboard/dashboard';
import AccountScreen from './account/account';
import MembersScreen from './members/members';
import ProjectStack from './projects';
import SettingsScreen from './setting/settings'

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
    },
    members: {
        name: '_MEMBERS_',
        config: { screen: MembersScreen }
    },
    projects: {
        name: '_PROJECTS_',
        config: { screen: ProjectStack }
    },
    settings: {
        name: '_SETTING_',
        config: { screen: SettingsScreen }
    }
};

export const stacks = {
    app: 'APPLICATION_STACK',
    auth: 'AUTHENTICATION_STACK'
}

export default screens;
