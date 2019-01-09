export const projectActions = {
    fetchApiProjects: {
        action: '_FETCH_API_PROJECTS_',
        invoke: () => ({ type: projectActions.fetchApiProjects.action })
    },
    getProjectList: {
        action: '_GET_PROJECT_LIST_',
        invoke: projectListData => ({ type: projectActions.getProjectList.action, projectListData })
    }
};