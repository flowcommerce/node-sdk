import Client from './client';

export default class Tags extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/tags`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/tags/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/tags/${id}`, options);
  }

}
