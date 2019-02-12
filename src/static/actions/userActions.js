import { filter } from "rsvp";

export const userActions = {
    login: {
        action: '_LOGIN_',
        invoke: authInfo => ({type: userActions.login.action, authInfo}) 
    },
    requestApi: {
        action: '_REQUEST_API_',
        invoke: isFetching => ({type: userActions.requestApi.action, isFetching})
    },
    setUserInfo: {
        action: '_SET_USER_DATA_',
        invoke: userData => ({type: userActions.setUserInfo.action, userData})
    },
    logout: {
        action: '_LOGOUT_',
        invoke: () => ({type: userActions.logout.action})
    },
    getProjectList: {
        action: '_GET_PROJECT_LIST_',
        invoke: () => ({type: userActions.getProjectList.action})
    },
    loadMoreProjects: {
        action: '_LOAD_MORE_PROJECT_',
        invoke: () => ({type: userActions.loadMoreProjects.action})
    },
    refreshProjectsList: {
        action: '_REFRESH_PROJECTS_LIST_',
        invoke: () => ({ type: userActions.refreshProjectsList.action })
    },
    changeProjectFilter: {
        action: '_CHANGE_PROJECT_FILTER_',
        invoke: filter => ({ type: userActions.changeProjectFilter.action, filter })
    },
    updateProjectTags: {
        action: '_UPDATE_PROJECT_TAGS_',
        invoke: updateTagData => ({ type: userActions.updateProjectTags.action, updateTagData})
    },
    getProjectIssues: {
        action: '_GET_PROJECT_ISSUES_',
        invoke: getIssuesData => ({ type: userActions.getProjectIssues.action, getIssuesData})
    },
    changeIssuesFilter: {
        action: '_CHANGE_ISSUES_FILTER_',
        invoke: issuesfilter => ({ type: userActions.changeIssuesFilter.action, issuesfilter })
    },
    loadMoreIssues: {
        action: '_LOAD_MORE_ISSUES_',
        invoke: curentProjectID => ({type: userActions.loadMoreIssues.action, curentProjectID})
    },
    refreshProjectsIssues: {
        action: '_REFRESH_PROJECTS_ISSUES_',
        invoke: getIssuesData => ({ type: userActions.refreshProjectsIssues.action, getIssuesData })
    },
};