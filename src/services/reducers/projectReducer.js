import { projectActions, userActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    filter: {
        status: 'working',
        order_by: 'percent_complete',
        order: 'desc',
        tags: '',
        limit: 5
    },
    projectList: null,
    working: null,
    upnext: null,
    done: null,
    loadingData: false
});

const ACTION_HANDLERS =  {
    [userActions.changeProjectFilter.action]: (state, payload) => ({
        ...state,
        filter: {
            ...state.filter,
            ...payload.filter
        }
    }),
    [projectActions.setList.action]: (state, payload) => ({
        ...state,
        projectList: payload.listProject
    }),
    [projectActions.loadingData.action]: (state, payload) => ({
        ...state,
        loadingData: payload.fetching
    })
}

const projectReducer = (state = getInitialState(), action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { projectReducer };