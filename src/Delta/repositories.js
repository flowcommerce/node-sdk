import Client from './client';

export default class Repositories extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getGithub(options) {
    return this.makeRequest(`${this.host}/repositories/github`, options);
  }

}
