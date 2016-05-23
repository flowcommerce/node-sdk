import Client from './client';

export default class Shas extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/shas`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/shas/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/shas/${id}`, options);
  }

}
