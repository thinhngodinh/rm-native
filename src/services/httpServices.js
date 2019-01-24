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

    get(url, headers = null) {
        return this.call('get', url, null, headers);
    }

    post(url, body, headers = null) {
        return this.call('post', url, body, headers);
    }

    put(url, body, headers = null) {
        return this.call('PUT', url, body, headers);
    }

    patch(url, body, headers = null) {
        return this.call('patch', url, body, headers);
    }

    delete(url, body, headers = null) {
        return this.call('delete', url, body, headers);
    }

    call(method, url, body, headers) {
        console.log('HTTP', `[${method.toUpperCase()}]`, url)
        const fetchConfig = {
            method: method,
            body: JSON.stringify(body),
            headers: {
                ...headers
            }
        }
        console.log('fetchConfig', fetchConfig);
        if (!body) {
            delete fetchConfig.body;
        }
        return fetch(url, fetchConfig)
            .then(this._handleResponse)
            .then(response => {
                return response;
            })
            .catch(this._handleError);
    }

    _handleResponse(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response.json());
        } else {
            if (response.hasOwnProperty('error')) {
                return Promise.reject(response.error());
            } else if (response.headers.get('Content-Type').indexOf('json') >= 0) {
                return Promise.reject(response.json());
            } else {
                return Promise.reject({
                    message: 'Unexpected error happened. Please try again',
                    status: false
                });
            }
        }
    }

    _handleError(error) {
        if (error instanceof Promise) {
            return error.then(response => Promise.reject(response));
        } else {
            return Promise.reject(error);
        }
    }
}