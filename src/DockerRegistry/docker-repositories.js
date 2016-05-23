import Client from './client';

export default class DockerRepositories extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Docker Registry',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postAutobuildAnd(org, repo, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/v2/repositories/${org}/${repo}/autobuild/`, options);
  }

}
