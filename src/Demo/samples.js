import Client from './client';

export default class Samples extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'demo',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/samples/versions`, options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/samples`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/samples/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/samples`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/samples/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/samples/${id}`, options);
  }

}
