export default class HttpService {
    constructor() {
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.patch = this.patch.bind(this);
        this.delete = this.delete.bind(this);
        this.call = this.call.bind(this);
        this._handleError = this._handleError.bind(this);
        this._handleResponse = this._handleResponse.bind(this);
    }

    get(url) {
        return this.call('get', url, null, null);
    }

    post(url, body, headers = null) {
        return this.call('post', url, body, headers);
    }

    put(url, body, headers = null) {
        return this.call('put', url, body, headers);
    }

    patch(url, body, headers = null) {
        return this.call('patch', url, body, headers);
    }

    delete(url, body, headers = null) {
        return this.call('delete', url, body, headers);
    }

    call(method, url, body, headers) {
        console.warn('Fetch Call', method, url, body, headers)
        return fetch(method, url, body, headers)
            .then(this._handleResponse)
            .then(response => {
                return {...response, body: parseJson(response.body)};
            })
            .catch(this._handleError);
    }

    _handleResponse(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            const parsedBody = parseJson(response.body);
            const ErrCode = parsedBody && parsedBody.ErrCode;
            return Promise.reject(new CustomError(response.status, ErrCode, response.error));
        }
    }
    
    _handleError(error) {
        alert('Service Request Error');
        return Promise.reject(error);
    }
}