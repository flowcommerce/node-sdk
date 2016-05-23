import Client from './client';

export default class GithubWebhooks extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postByProjectId(projectId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/webhooks/github/${projectId}`, options);
  }

}
