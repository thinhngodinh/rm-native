export const appActions = {
    verifyCurrentToken: {
        action: '_VERIFY_CURRENT_TOKEN_',
        invoke: () => ({ type: appActions.verifyCurrentToken.action })
    },
    initApp: {
        actions: '_INIT_APP_',
        invoke: () => ({ type: appActions.initApp.actions })
    },
    setSessionToken: {
        action: '_SET_SESSION_TOKEN_',
        invoke: session => ({ type: appActions.setSessionToken.action, session })
    },
    removeSessionToken: {
        action: '_REMOVE_SESSION_TOKEN_',
        invoke: () => ({ type: appActions.removeSessionToken.action })
    },
    renderLoginForm: {
        action: '_RENDER_LOGIN_FORM_',
        invoke: shouldRenderLoginForm => ({ type: appActions.renderLoginForm.action, shouldRenderLoginForm })
    },
    setNetworkStatus: {
        action: '_SET_NETWORK_STATUS_',
        invoke: networkState => ({ type: appActions.setNetworkStatus.action, networkState })
    },
    exitApp: {
        action: '_EXIT_APP_',
        invoke: () => ({ type: appActions.exitApp.action })
    }
}