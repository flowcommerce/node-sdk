import Client from './client';

export default class Zones extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'cloudflare',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/zones`, options);
  }

}
