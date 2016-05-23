import Client from './client';

export default class Memberships extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/memberships`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/memberships/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/memberships`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/memberships/${id}`, options);
  }

}
