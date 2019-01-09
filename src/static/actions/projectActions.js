export const projectActions = {
    fetchApiProjects: {
        action: '_FETCH_API_PROJECTS_',
        invoke: () => ({ type: projectActions.fetchApiProjects.action })
    },
    setList: {
        action: '_SET_LIST_',
        invoke: listProject => ({ type: projectActions.setList.action, listProject })
    }
};