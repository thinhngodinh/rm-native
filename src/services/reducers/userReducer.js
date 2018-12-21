import { userActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    authInfo: null,
    userInfo: null
});

const ACTION_HANDLERS =  {
    [userActions.login.action]: (state, action) => ({
            ...state,
            authInfo: action.authInfo
    }),
    [userActions.setUserInfo.action]: (state, action) => ({
        ...state,
        info: action.userData
    })
}

const userReducer = (state = {}, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { userReducer };