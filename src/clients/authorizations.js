import Client from './client';

export default class Authorizations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/authorizations`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/authorizations`, options);
  }

  getByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/${key}`, options);
  }

  deleteByKey(organization, key, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/authorizations/${key}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/versions`, options);
  }

}
