import Client from './client';

export default class Emails extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'email',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/emails`, options);
  }

}
