import Client from './client';

export default class Shipments extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/shipments`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/shipments`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/shipments/${id}`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/shipments/versions`, options);
  }

}
