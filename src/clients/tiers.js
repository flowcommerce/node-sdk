import Client from './client';

export default class Tiers extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/tiers`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/tiers`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${id}`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/tiers/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/tiers/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/tiers/versions`, options);
  }

}
