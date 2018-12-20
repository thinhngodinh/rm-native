import { userActions } from '../../static/actionsIndex';

const ACTION_HANDLERS =  {
    [userActions.login.action]: (state, action) => ({
            ...state,
            authInfo: action.authInfo
    })
}

const userReducer = (state = {}, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { userReducer };