import { call, takeLatest, put, takeEvery } from 'redux-saga/effects';

import { projectActions } from '../../static/actionsIndex';
import { showToast } from '../../util/toast';

function *getListProject(apiService) {
    try{
        const projectListData = yield call([apiService, apiService.getProjectsList]);
        console.log('projectListData >>>>>>>>', projectListData);
        yield put(projectActions.getProjectList.invoke(projectListData.data));
    } catch (e) {
        showToast.error(e.message);
    } 
}
export function * projectSaga(apiService) {
    yield takeEvery(projectActions.fetchApiProjects.action, getListProject, apiService)
}