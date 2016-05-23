import Client from './client';

export default class PasswordResetForms extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'user',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postResets(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/passwords/resets`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/passwords`, options);
  }

}
