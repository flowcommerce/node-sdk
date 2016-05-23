import Client from './client';

export default class GithubUsers extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postGithub(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/authentications/github`, options);
  }

}
