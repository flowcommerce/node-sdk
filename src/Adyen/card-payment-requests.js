import Client from './client';

export default class CardPaymentRequests extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Adyen',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postAuthorise(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/authorise`, options);
  }

}
