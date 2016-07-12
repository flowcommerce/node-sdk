import Client from './client';

export default class Attributes extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/attributes`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/attributes`, options);
  }

  getByName(organization, name, options) {
    return this.makeRequest(`${this.host}/${organization}/attributes/${name}`, options);
  }

  putByName(organization, name, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/attributes/${name}`, options);
  }

  deleteByName(organization, name, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/attributes/${name}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/attributes/versions`, options);
  }

}
