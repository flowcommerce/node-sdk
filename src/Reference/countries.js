import Client from './client';

export default class Countries extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'reference',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/countries`, options);
  }

}
