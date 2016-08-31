import Client from './client';

export default class Memberships extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/memberships`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/memberships`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/memberships/${id}`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/memberships/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/memberships/${id}`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/memberships/versions`, options);
  }

}
