export const appActions = {
    initApp: {
        actions: '_INIT_APP_',
        invoke: () => ({ type: appActions.initApp.actions })
    },
    exitApp: {
        action: '_EXIT_APP_',
        invoke: () => ({ type: appActions.exitApp.action })
    }
}