import Client from './client';

export default class Tiers extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'fulfillment',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/tiers/versions`, options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/tiers`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/tiers/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/tiers`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/tiers/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/tiers/${id}`, options);
  }

}
