import { takeLatest } from 'redux-saga/effects'
// import { delay } from 'redux-saga'

import { projectActions } from '../../static/actionsIndex'
// import { showToast } from '../../util/toast';

function *getProjectsList(apiService) {
    console.log('prepage request API get all projects');
}
export function * projectsSaga() {
    yield takeLatest(projectActions.getProjectsList.action, getProjectsList, apiService)
}