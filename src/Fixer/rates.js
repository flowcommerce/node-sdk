import Client from './client';

export default class Rates extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'fixer',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getByTimestamp(timestamp, options) {
    return this.makeRequest(`${this.host}/${timestamp}`, options);
  }

}
