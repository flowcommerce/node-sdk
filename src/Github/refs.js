import Client from './client';

export default class Refs extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(owner, repo, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/git/refs`, options);
  }

  getByRef(owner, repo, ref, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/git/refs/${ref}`, options);
  }

  post(owner, repo, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/git/refs`, options);
  }

}
