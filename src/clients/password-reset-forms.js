import Client from './client';

export default class PasswordResetForms extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/passwords`, options);
  }

  postResets(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/passwords/resets`, options);
  }

}
