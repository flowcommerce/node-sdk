import Client from './client';

export default class HarmonizedItems extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'harmonization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/versions`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${id}`, options);
  }

}
