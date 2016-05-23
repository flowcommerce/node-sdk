import Client from './client';

export default class Authorizations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'authorization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/authorizations`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/authorizations/versions`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/authorizations/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/authorizations`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/authorizations/${id}`, options);
  }

}
