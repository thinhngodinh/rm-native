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

    paraGen(options, url) {
        let result = ''

        for (let key in options) {
            if (options[key]) {
                result += '&' + key + '=' + options[key]
            }
        }
        result = '?' + result.substring(result.indexOf('&') + 1)
        result = result.replace(' ', '%20')
        return url + result
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
            Accept: 'application/json',
            'Content-Type': 'application/json'
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

    getProjectsList (filter) {
        const urlWithFilter = this.paraGen(filter, API_URL.GET_PROJECT)
        return this.httpService.get(urlWithFilter, this._defaultRequestHeader);
    }

    updateProjectTag(projectId, tagData) {
        const bodyPayload = {
            tags: tagData
        }
        const urlUpdateTag = API_URL.PROJECT_TAGS + projectId + '/tags';
        return this.httpService.put(urlUpdateTag, bodyPayload, this._defaultRequestHeader)
    }

    getProjectListIssues(projectId, filterList) {
        const updateUrlAPI = API_URL.GET_PROJECT + '/' + projectId + '/issues';
        const urlGetIssues = this.paraGen(filterList, updateUrlAPI);

        return this.httpService.get(urlGetIssues, this._defaultRequestHeader);
    }
}