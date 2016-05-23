import Client from './client';

export default class Users extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'user',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/users`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/users/versions`, options);
  }

  postAuthenticate(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/authenticate`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/users/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/users/${id}`, options);
  }

  patchPasswordsById(id, options) {
    Object.assign(options, { method: 'PATCH' });
    return this.makeRequest(`${this.host}/users/${id}/passwords`, options);
  }

  deletePasswordsById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/users/${id}/passwords`, options);
  }

}
