import Client from './client';

export default class Initializations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'payment-internal',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/_internal_/initializations`, options);
  }

}
