import { filter } from "rsvp";

export const userActions = {
    login: {
        action: '_LOGIN_',
        invoke: authInfo => ({type: userActions.login.action, authInfo}) 
    },
    requestApi: {
        action: '_REQUEST_API_',
        invoke: isFetching => ({type: userActions.requestApi.action, isFetching})
    },
    setUserInfo: {
        action: '_SET_USER_DATA_',
        invoke: userData => ({type: userActions.setUserInfo.action, userData})
    },
    logout: {
        action: '_LOGOUT_',
        invoke: () => ({type: userActions.logout.action})
    },
    getProjectList: {
        action: '_GET_PROJECT_LIST_',
        invoke: () => ({type: userActions.getProjectList.action})
    },
    changeProjectFilter: {
        action: '_CHANGE_PROJECT_FILTER_',
        invoke: filter => ({ type: userActions.changeProjectFilter.action, filter })
    },
};