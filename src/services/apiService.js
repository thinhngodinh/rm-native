import API_URL from '../static/apiConst';

import { AsyncStorage } from "react-native"

export default class ApiService {
    constructor(httpService) {
        this.httpService = httpService,
        this._token = '';
        this._expires_in = '';
        this._refresh_token = '',
        this._token_type = '',
        this._defaultRequestHeader = null;
    }

    async _storeToken(authToken) {
        try {
            await AsyncStorage.setItem('token', authToken);
        } catch (e) {
            alert('Application couldn\'t save your authentication session. Next time you\'re requried to login to use app.');
        }
    }

    createDefaultHeaders(token, tokenType) {
        this._storeToken(`${tokenType} ${token}`);
        this.createHeaders(`${tokenType} ${token}`);
    }

    removeHeaders() {
        this._defaultRequestHeader = null;
    }
    
    createHeaders(authToken) {
        this._defaultRequestHeader = {
            Authorization: authToken,
            Accept: 'application/x.rest.v1+json'
        }
    }

    login(authData) {
        const {authInfor, appConfig} = authData;
        const requestHeaders = {
            'Content-Type': 'application/json'
        };
        const requestBody = {
            username      : authInfor.username,
            password      : authInfor.password,
            client_id     : appConfig.client_id,
            client_secret : appConfig.client_secret,
            grant_type    : appConfig.grant_type,
            database      : appConfig.database
        };
        return this.httpService.post(API_URL.LOGIN, requestBody, requestHeaders)
    }

    getCurrentUser() {
        if (!this._defaultRequestHeader) {
            return false;
        }
        return this.httpService.get(API_URL.USER, this._defaultRequestHeader);
    }

    logout() {
        return this.httpService.get(API_URL.LOGOUT, this._defaultRequestHeader);
    }

    getProjectsList () {
        return this.httpService.get(API_URL.GET_PROJECT, this._defaultRequestHeader);
    }
}