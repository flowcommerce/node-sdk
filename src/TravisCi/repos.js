import Client from './client';

export default class Repos extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'travis-ci',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/repos`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/repos/${id}`, options);
  }

}
