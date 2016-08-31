import Client from './client';

export default class SpotRates extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/currency/spot-rates`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/currency/spot-rates/versions`, options);
  }

}
