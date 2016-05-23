import Client from './client';

export default class V2Tags extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Docker Registry',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(org, repo, options) {
    return this.makeRequest(`${this.host}/v2/repositories/${org}/${repo}/tags`, options);
  }

}
