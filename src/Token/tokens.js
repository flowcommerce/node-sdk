import Client from './client';

export default class Tokens extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'token',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/tokens`, options);
  }

  getByToken(token, options) {
    return this.makeRequest(`${this.host}/tokens/${token}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/tokens`, options);
  }

  deleteByToken(token, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/tokens/${token}`, options);
  }

}
