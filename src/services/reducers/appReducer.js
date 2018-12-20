import { appActions, userActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    initial: false,
    client_id: '1',
    client_secret: '4c7f6f8fa93d59c45502c0ae8c4a95b',
    database: 'php_team',
    grant_type: 'rm_validate',
    fetchingApi: false
});

const ACTION_HANDLERS =  {
    [appActions.initApp.actions]: (state, action) => ({
        ...state,
        initial: true
    }),
    [userActions.requestApi.action]: (state, action) => ({
        ...state,
        fetchingApi: action.isFetching
    })
}

const applicationReducer = (state = getInitialState(), action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { applicationReducer };