import Client from './client';

export default class Tribes extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'payment-internal',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/tribes`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/tribes/${id}`, options);
  }

}
