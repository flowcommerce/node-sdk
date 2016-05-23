import Client from './client';

export default class Healthchecks extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getHealthcheck(options) {
    return this.makeRequest(`${this.host}/_internal_/healthcheck`, options);
  }

}
