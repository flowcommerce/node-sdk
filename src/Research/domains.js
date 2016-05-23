import Client from './client';

export default class Domains extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'research',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/domains`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/domains/${id}`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/domains/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/domains/${id}`, options);
  }

}
