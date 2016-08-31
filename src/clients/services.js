import Client from './client';

export default class Services extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/services`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/services/${id}`, options);
  }

}
