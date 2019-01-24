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
    const projectIdRequest = payload.updateTagData.projectId;
    const tagDataRequest = payload.updateTagData.tagData;
    try {
        const newProjectData = yield call([apiService, apiService.updateProjectTag], projectIdRequest, tagDataRequest)
        console.log('data tag >>>>>>>>>>>>>', newProjectData)
        yield put(projectActions.updateTag.invoke({projectId: projectIdRequest, tagData: tagDataRequest}));
    } catch (e) {
        showToast.error(e.message);
        console.log('call API failed e', e);
        console.log('call API failed', e.message);
    }

}

export function * projectSaga(apiService) {
    yield takeLatest(userActions.getProjectList.action, getListProject, apiService);
    yield takeLatest(userActions.loadMoreProjects.action, loadMoreProject, apiService);
    yield takeLatest(userActions.refreshProjectsList.action, refreshList, apiService);
    yield takeLatest(userActions.updateProjectTags.action, updateProjectTagsList, apiService);
}