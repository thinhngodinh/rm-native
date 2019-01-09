import { projectActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    projectList: null
});

const ACTION_HANDLERS =  {
    [projectActions.getProjectList.action]: (state, action) => ({
        ...state,
        projectList: action.projectListData
    })
}

const projectReducer = (state = getInitialState(), action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { projectReducer };