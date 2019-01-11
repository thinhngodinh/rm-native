import { projectActions, userActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    filter: {
        status: 'working',
        order_by: 'percent_complete',
        order: 'DESC',
        limit: 8,
    },
    projectList: null,
    working: null,
    upnext: null,
    done: null
});

const ACTION_HANDLERS =  {
    [userActions.changeProjectFilter.action]: (state, payload) => ({
        filter: {
            ...state.filter,
            ...payload.filter
        }
    }),
    [projectActions.setList.action]: (state, payload) => ({
        ...state,
        projectList: payload.listProject
    })
}

const projectReducer = (state = getInitialState(), action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { projectReducer };