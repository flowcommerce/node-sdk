import Client from './client';

export default class Tags extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getTags(owner, repo, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/tags`, options);
  }

  getTagsBySha(owner, repo, sha, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/tags/${sha}`, options);
  }

  postGitAndTags(owner, repo, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/git/tags`, options);
  }

}
