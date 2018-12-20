import { call, select, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { userActions } from '../../static/actionsIndex'

function* verifyUser(apiService) {
    yield put(userActions.requestApi.invoke(true));
    const {authInfor, appConfig} = yield select(state => ({
        authInfor: state.user.authInfo,
        appConfig: state.app
    }));
    yield call(delay, 3000)
    try {
        yield call([apiService, apiService.login], {authInfor, appConfig});
        // alert('Called Api');
    }
    catch (e) {
        // alert('Called Api With Error');
        console.warn(e)
    }

    console.log(authInfor, appConfig, apiService)

    
    yield put(userActions.requestApi.invoke(false));
}

export function* authSaga(apiService) {
    yield takeLatest(userActions.login.action, verifyUser, apiService);
}