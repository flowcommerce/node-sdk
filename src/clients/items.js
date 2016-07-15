import Client from './client';

export default class Items extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/items`, options);
  }

  getByNumber(organization, number, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items/${number}`, options);
  }

  putByNumber(organization, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/items/${number}`, options);
  }

  deleteByNumber(organization, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/items/${number}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items/versions`, options);
  }

}
