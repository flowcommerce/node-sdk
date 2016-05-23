import Client from './client';

export default class Checks extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'authorization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/checks`, options);
  }

}
