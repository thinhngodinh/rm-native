import { userActions, appActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    authInfo: null,
    info: null
});

const ACTION_HANDLERS =  {
    [userActions.login.action]: (state, action) => ({
            ...state,
            authInfo: action.authInfo
    }),
    [userActions.setUserInfo.action]: (state, action) => ({
        ...state,
        info: action.userData
    }),
    [appActions.removeSessionToken.action]: state => ({
        ...state,
        info: null
    })
}

const userReducer = (state = {}, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { userReducer };