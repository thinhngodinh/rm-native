import { projectActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    projectList: null
});

const ACTION_HANDLERS =  {
    [projectActions.getProjectsList.action]: (state, action) => ({
        ...state,
        projectList: action
    })
}

const projectReducer = (state = {}, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { projectReducer };