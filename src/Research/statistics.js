import Client from './client';

export default class Statistics extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'research',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/statistics`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/statistics`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/statistics/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/statistics/${id}`, options);
  }

}
