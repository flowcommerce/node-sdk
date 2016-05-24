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

  get(options) {
    return this.makeRequest(`${this.host}/github`, options);
  }

  getConfigByOwnerAndRepo(owner, repo, options) {
    return this.makeRequest(`${this.host}/github/${owner}/${repo}/config`, options);
  }

}
