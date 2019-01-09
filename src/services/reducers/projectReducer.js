import { projectActions } from '../../static/actionsIndex';

const getInitialState = () => ({
    projectList: null,
    working: null,
    upnext: null,
    done: null
});

const ACTION_HANDLERS =  {
    [projectActions.setList.action]: (state, action) => ({
        ...state,
        projectList: action.listProject
    })
}

const projectReducer = (state = getInitialState(), action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};

export { projectReducer };