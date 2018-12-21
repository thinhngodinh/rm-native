export const appActions = {
    initApp: {
        actions: '_INIT_APP_',
        invoke: () => ({ type: appActions.initApp.actions })
    },
    setSessionToken: {
        action: '_SET_SESSION_TOKEN_',
        invoke: session => ({type: appActions.setSessionToken.action, session})
    },
    exitApp: {
        action: '_EXIT_APP_',
        invoke: () => ({ type: appActions.exitApp.action })
    }
}