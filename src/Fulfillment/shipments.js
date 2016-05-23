import Client from './client';

export default class Shipments extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'fulfillment',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/shipments/versions`, options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/shipments`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/shipments/${id}`, options);
  }

}
