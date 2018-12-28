import { call, select, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { userActions, appActions } from '../../static/actionsIndex'
import { showToast } from '../../util/toast';

function* verifyUser(apiService) {
    yield put(userActions.requestApi.invoke(true));
    const { authInfor, appConfig } = yield select(state => ({
        authInfor: state.user.authInfo,
        appConfig: state.app
    }));
    yield call(delay, 3000)
    try {
        const sessionInfo = yield call([apiService, apiService.login], { authInfor, appConfig });
        yield put(appActions.setSessionToken.invoke(sessionInfo))
        yield call([apiService, apiService.createDefaultHeaders], sessionInfo.access_token, sessionInfo.token_type)
        const userInfo = yield call([apiService, apiService.getCurrentUser]);
        yield put(userActions.setUserInfo.invoke(userInfo.data.users))
        showToast.sucess(`Welcome ${userInfo.data.users.first_name} ${userInfo.data.users.last_name} `)
    }
    catch (e) {
        console.log(e)
        showToast.error(e.message);
    }

    yield put(userActions.requestApi.invoke(false));
}

// function * verifyCurrentToken(apiService) {
//     console.log('verify token saga', apiService);
//     if (apiService._token === '') {
//         console.log('navigate to login', stacks.auth)
//         NavigationService.navigate(stacks.auth);
//         // NavigationActions.navigate(stacks.auth);
//         // yield put(userActions.navigateToLogin.invoke());
//     }
// }

export function* authSaga(apiService) {
    yield takeLatest(userActions.login.action, verifyUser, apiService);
}