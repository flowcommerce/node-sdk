import Client from './client';

export default class Applications extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'registry',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/applications`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/applications/versions`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/applications/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/applications`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/applications/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/applications/${id}`, options);
  }

}
