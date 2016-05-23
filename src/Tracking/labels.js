import Client from './client';

export default class Labels extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'tracking',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/labels/versions`, options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/labels`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/labels/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/labels`, options);
  }

}
