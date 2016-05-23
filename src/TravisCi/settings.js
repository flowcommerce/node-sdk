import Client from './client';

export default class Settings extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'travis-ci',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(repositoryId, options) {
    return this.makeRequest(`${this.host}/repos/${repositoryId}/settings`, options);
  }

}
