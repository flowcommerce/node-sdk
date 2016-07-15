import Client from './client';

export default class Captures extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/captures`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/captures`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/captures/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/captures/versions`, options);
  }

}
