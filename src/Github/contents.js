import Client from './client';

export default class Contents extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getReadme(owner, repo, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/readme`, options);
  }

  getContentsByPath(owner, repo, path, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/contents/${path}`, options);
  }

}
