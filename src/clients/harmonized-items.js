import Client from './client';

export default class HarmonizedItems extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items`, options);
  }

  getByNumber(organization, number, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${number}`, options);
  }

  putByNumber(organization, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${number}`, options);
  }

  deleteByNumber(organization, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${number}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/versions`, options);
  }

}
