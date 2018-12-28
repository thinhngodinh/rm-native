import API_URL from '../static/apiConst';

export default class ApiService {
    constructor(httpService) {
        this.httpService = httpService,
        this._token = '';
        this._expires_in = '';
        this._refresh_token = '',
        this._token_type = '',
        this._defaultRequestHeader = null;
    }

    createDefaultHeaders(token, tokenType) {
        this._defaultRequestHeader = {
            Authorization: `${tokenType} ${token}`,
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
}