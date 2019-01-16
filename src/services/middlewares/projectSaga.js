import { call, takeLatest, put, select } from 'redux-saga/effects';

import { projectActions, userActions } from '../../static/actionsIndex';
import { showToast } from '../../util/toast';

function * getListProject(apiService, ...option) {
    const filter = yield select(state => state.project.filter);
    console.log('project filter', filter);
    yield put(projectActions.loadingData.invoke(true));
    try{
        const projectListData = yield call([apiService, apiService.getProjectsList], filter);
        console.log('projectListData >>>>>>>>', projectListData);
        if(projectListData) {
            yield put(projectActions.loadingData.invoke(false))
        }
        yield put(projectActions.setList.invoke(projectListData.data));
    } catch (e) {
        showToast.error(e.message);
    } 
}
export function * projectSaga(apiService) {
    yield takeLatest(userActions.getProjectList.action, getListProject, apiService)
}