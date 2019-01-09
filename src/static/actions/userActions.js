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
        working: () => ({type: '_GET_PROJECT_LIST_WORKING_'}),
        upnext: () => ({type: '_GET_PROJECT_LIST_UPNEXT_'}), 
        done: () => ({type: '_GET_PROJECT_LIST_DONE_'})
    }
};