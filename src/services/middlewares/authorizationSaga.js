import { AsyncStorage } from "react-native"
import { call, select, put, takeLatest } from 'redux-saga/effects'

import { userActions, appActions } from '../../static/actionsIndex'
import { showToast } from '../../util/toast';

function* verifyUser(apiService) {
    yield put(userActions.requestApi.invoke(true));
    const { authInfor, appConfig } = yield select(state => ({
        authInfor: state.user.authInfo,
        appConfig: state.app
    }));
    try {
        const sessionInfo = yield call([apiService, apiService.login], { authInfor, appConfig });
        yield put(appActions.setSessionToken.invoke(sessionInfo));
        yield call([apiService, apiService.createDefaultHeaders], sessionInfo.access_token, sessionInfo.token_type);
        yield AsyncStorage.setItem('username', authInfor.username);
        yield * _getCurrentUserInfo(apiService);

    }
    catch (e) {
        yield _handleToastError(e);
    }
    yield put(userActions.requestApi.invoke(false));
}

function * verifyCurrentToken(apiService) {
    const token = yield AsyncStorage.getItem('token');
    const username = yield AsyncStorage.getItem('username');

    if (username) {
        console.log('Verify User by Redmine `Username`', username);
        console.log('Logic will apply later');
    }

    if (!token) {
        yield put(appActions.renderLoginForm.invoke(true));
    } else {
        yield call([apiService, apiService.createHeaders], token);
        yield * _getCurrentUserInfo(apiService);
    }
}

function * _getCurrentUserInfo(apiService) {
    try {
        const userInfo = yield call([apiService, apiService.getCurrentUser]);
        yield put(userActions.setUserInfo.invoke(userInfo.data.users));
        showToast.sucess(`Welcome, ${userInfo.data.users.first_name} ${userInfo.data.users.last_name}!`)
    } catch (e) {
        yield AsyncStorage.removeItem('token');
        yield AsyncStorage.removeItem('username');
        yield put(appActions.renderLoginForm.invoke(true));
        yield _handleToastError(e);
    }
}

function _handleToastError(e) {
    console.log(e)
    showToast.error(e.message);
}

function * logout(apiService) {
    console.log('Saga Handle logout process');
    try {
        const logoutResponse = yield call([apiService, apiService.logout]);
        console.log(logoutResponse);
        showToast.sucess(logoutResponse.message);
    } catch(e) {
        yield _handleToastError(e);
    }
    yield put(appActions.removeSessionToken.invoke());
    yield AsyncStorage.removeItem('token');
    yield AsyncStorage.removeItem('username');
    yield call([apiService, apiService.removeHeaders]);

}

export function * authSaga(apiService) {
    yield takeLatest(userActions.login.action, verifyUser, apiService);
    yield takeLatest(appActions.verifyCurrentToken.action, verifyCurrentToken, apiService);
    yield takeLatest(userActions.logout.action, logout, apiService);
}