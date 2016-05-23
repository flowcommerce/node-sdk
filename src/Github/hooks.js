import Client from './client';

export default class Hooks extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(owner, repo, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/hooks`, options);
  }

  getById(owner, repo, id, options) {
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/hooks/${id}`, options);
  }

  post(owner, repo, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/hooks`, options);
  }

  deleteById(owner, repo, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/repos/${owner}/${repo}/hooks/${id}`, options);
  }

}
