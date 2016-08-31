import Client from './client';

export default class Centers extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/centers`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/centers`, options);
  }

  getByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/centers/${key}`, options);
  }

  putByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/centers/${key}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/centers/versions`, options);
  }

}
