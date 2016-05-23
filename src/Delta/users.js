import Client from './client';

export default class Users extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/users`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/users/${id}`, options);
  }

  getIdentifierById(id, options) {
    return this.makeRequest(`${this.host}/users/${id}/identifier`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users`, options);
  }

}
