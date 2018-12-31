import { appActions, userActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    initial: false,
    client_id: '1',
    client_secret: '4c7f6f8fa93d59c45502c0ae8c4a95b',
    database: 'php_team',
    grant_type: 'rm_validate',
    fetchingApi: false,
    session: null,
    renderLoginForm: false
});

const ACTION_HANDLERS =  {
    [appActions.initApp.actions]: (state, action) => ({
        ...state,
        initial: true
    }),
    [appActions.setSessionToken.action]: (state, action) => ({
        ...state,
        session: action.session
    }),
    [userActions.requestApi.action]: (state, action) => ({
        ...state,
        fetchingApi: action.isFetching
    }),
    [appActions.renderLoginForm.action]: (state, action) => ({
        ...state,
        renderLoginForm: action.shouldRenderLoginForm
    }),
    [appActions.removeSessionToken.action]: state => ({
        ...state,
        session: null
    })
}

const applicationReducer = (state = getInitialState(), action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { applicationReducer };