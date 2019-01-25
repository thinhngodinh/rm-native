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
    loadingData: false,
    refreshing: false,
    projectTag: []
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
    [projectActions.appendList.action]: (state, payload) => ({
        ...state,
        projectList: {
            ...payload.listProject,
            projects: [
                ...state.projectList.projects,
                ...payload.listProject.projects
            ]
        }
    }),
    [userActions.refreshProjectsList.action]: (state) => ({
        ...state,
        filter: {
            ...state.filter,
            page: 1
        },
        loadingData: false,
        refreshing: true
    }),
    [projectActions.loadingData.action]: (state, payload) => ({
        ...state,
        loadingData: !state.refreshing ? payload.fetching : false,
        refreshing: state.refreshing ? payload.fetching : false,
    }),
    [projectActions.updateTag.action]: (state, payload) => {
        return {
            ...state,
            projectTag: payload.tagInfor.tagData,
            loadingData: false
        }
    }
}

const projectReducer = (state = getInitialState(), action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { projectReducer };