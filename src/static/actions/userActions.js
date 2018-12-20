export const userActions = {
    login: {
        action: '_LOGIN_',
        invoke: authInfo => ({type: userActions.login.action, authInfo}) 
    },
    requestApi: {
        action: '_REQUEST_API_',
        invoke: isFetching => ({type: userActions.requestApi.action, isFetching})
    },
    logout: {
        action: '_LOGOUT_',
        invoke: () => ({type: userActions.logout.action})
    }
};