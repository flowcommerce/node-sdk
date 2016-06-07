import Client from './client';

export default class TribeStatus extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'payment-internal',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/_internal_/status`, options);
  }

}
