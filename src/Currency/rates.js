import Client from './client';

export default class Rates extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'currency',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/rates`, options);
  }

}
