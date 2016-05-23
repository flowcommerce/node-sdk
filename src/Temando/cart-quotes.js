import Client from './client';

export default class CartQuotes extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Temando',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/cart-quote`, options);
  }

}
