import Client from './client';

export default class Organizations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/organizations`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/organizations`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/organizations/versions`, options);
  }

}
