import Client from './client';

export default class Repositories extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getUserAndRepos(options) {
    return this.makeRequest(`${this.host}/user/repos`, options);
  }

  getUsersAndReposByUsername(username, options) {
    return this.makeRequest(`${this.host}/users/${username}/repos`, options);
  }

  getOrgsAndReposByOrg(org, options) {
    return this.makeRequest(`${this.host}/orgs/${org}/repos`, options);
  }

}
