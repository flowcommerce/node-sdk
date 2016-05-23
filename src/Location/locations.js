import Client from './client';

export default class Locations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'location',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/locations`, options);
  }

}
