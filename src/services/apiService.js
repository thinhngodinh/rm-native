import API_URL from '../static/apiConst';

export default class ApiService {
    constructor(httpService) {
        this.httpService = httpService
    }
    login(authData) {
        this.httpService.post(API_URL.LOGIN, authData)
    }
}