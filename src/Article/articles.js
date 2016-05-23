import Client from './client';

export default class Articles extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'article',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/articles`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/articles/versions`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/articles`, options);
  }

}
