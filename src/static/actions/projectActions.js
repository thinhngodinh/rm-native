export const projectActions = {
    fetchApiProjects: {
        action: '_FETCH_API_PROJECTS_',
        invoke: () => ({ type: projectActions.fetchApiProjects.action })
    },
    setList: {
        action: '_SET_LIST_',
        invoke: listProject => ({ type: projectActions.setList.action, listProject })
    },
    appendList: {
        action: '_APPEND_LIST_',
        invoke: listProject => ({ type: projectActions.appendList.action, listProject })
    },
    loadingData: {
        action: '_LOADING_',
        invoke: fetching => ({ type: projectActions.loadingData.action, fetching})
    },
    updateTag: {
        action: '_UPDATE_TAG_',
        invoke: tagInfor =>({type: projectActions.updateTag.action, tagInfor})
    },
    setListIssues: {
        action: '_SET_LIST_ISSUES_',
        invoke: setIssuesData =>({type: projectActions.setListIssues.action, setIssuesData})
    },
    appendListIssues: {
        action: '_APPEND_LIST_ISSUES_',
        invoke: listIssuesData =>({type: projectActions.appendListIssues.action, listIssuesData})
    }
};
