import { call, takeLatest, put, select } from 'redux-saga/effects';

import { projectActions, userActions } from '../../static/actionsIndex';
import { showToast } from '../../util/toast';
//
// ToDo: convert this saga file to class and invoke instant method
// To avoid props apiService manually to saga function
//

function * getListProject(apiService, ...option) {
    const filter = yield select(state => state.project.filter);
    const projectListData = yield * getProjects(apiService, filter);

    if (!projectListData) {
        return null;
    }

    yield put(projectActions.setList.invoke(projectListData.data));
}

function * loadMoreProject(apiService) {
    const {
        paged, 
        total_pages: totalPages
    } = yield select(state => state.project.projectList);
    if ( paged < totalPages ) {
        yield put(userActions.changeProjectFilter.invoke({page: paged + 1}));
        const filter = yield select(state => state.project.filter);
        const projectListData = yield * getProjects(apiService, filter);
        if (!projectListData) {
            return null;
        }
        yield put(projectActions.appendList.invoke(projectListData.data));
    }
}

function * refreshList(apiService) {
    yield * getListProject(apiService);
}

function * getProjects (apiService, filter) {
    yield put(projectActions.loadingData.invoke(true));
    try{
        const projectListData = yield call([apiService, apiService.getProjectsList], filter);
        yield put(projectActions.loadingData.invoke(false))
        return projectListData || null;
    } catch (e) {
        showToast.error(e.message);
        yield put(projectActions.loadingData.invoke(false))
    } 
}

function * updateProjectTagsList (apiService, payload) {
    yield put(projectActions.loadingData.invoke(true));
    const projectIdRequest = payload.updateTagData.projectId;
    const tagDataRequest = payload.updateTagData.tagData;
    try {
        const newProjectData = yield call([apiService, apiService.updateProjectTag], projectIdRequest, tagDataRequest)
        console.log('success API call', newProjectData)
        yield put(projectActions.updateTag.invoke({projectId: projectIdRequest, tagData: tagDataRequest}));
    } catch (e) {
        showToast.error(e.message);
        console.log('call API failed', e);
    }
    yield put(projectActions.loadingData.invoke(false));
}

function * setListIssuesProject(apiService, payload) {
    const projectId = payload.getIssuesData.projectId;
    const filterIssues = yield select(state => state.project.projectFilterIssues);

    if(payload.getIssuesData.isRefresh) {
        filterIssues.page = 1;
    }

    try{
        const listIssuesData = yield * getProjectIssues(apiService, projectId, filterIssues)
        if (!listIssuesData) {
            return null;
        }
        yield put(projectActions.setListIssues.invoke(listIssuesData.data));

    } catch(e) {
        showToast.error(e.message);
    }
}

function * refreshListIssues(apiService, payload) {
    yield * setListIssuesProject(apiService, payload);
}

function * loadMoreIssue(apiService, payload) {
    const {
        paged, 
        total_pages: totalPages
    } = yield select(state => state.project.projectIssues);

    if ( paged < totalPages ) {
        yield put(userActions.changeIssuesFilter.invoke({page: paged + 1}));
        const projectFilterIssues = yield select(state => state.project.projectFilterIssues);
        const listIssuesData = yield * getProjectIssues(apiService, payload.curentProjectID.projectId, projectFilterIssues);
        if (!listIssuesData) {
            return null;
        }
        yield put(projectActions.appendListIssues.invoke(listIssuesData.data));
    }
}

function * getProjectIssues (apiService, projectID, filterIssues) {
    yield put(projectActions.loadingData.invoke(true));
    try{
        const projectListIssuesData = yield call([apiService, apiService.getProjectListIssues], projectID, filterIssues);
        yield put(projectActions.loadingData.invoke(false))
        return projectListIssuesData || null;
    } catch (e) {
        showToast.error(e.message);
        yield put(projectActions.loadingData.invoke(false))
    } 
}

export function * projectSaga(apiService) {
    yield takeLatest(userActions.getProjectList.action, getListProject, apiService);
    yield takeLatest(userActions.loadMoreProjects.action, loadMoreProject, apiService);
    yield takeLatest(userActions.refreshProjectsList.action, refreshList, apiService);
    yield takeLatest(userActions.updateProjectTags.action, updateProjectTagsList, apiService);
    yield takeLatest(userActions.getProjectIssues.action, setListIssuesProject, apiService);
    yield takeLatest(userActions.loadMoreIssues.action, loadMoreIssue, apiService);
    yield takeLatest(userActions.refreshProjectsIssues.action, refreshListIssues, apiService);
}