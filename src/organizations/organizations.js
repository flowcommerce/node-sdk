import Client from '../client';

export default class Organizations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'organization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/organizations`, options);
  }

}
