import Client from '../client';

export default class Users extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'user',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/users`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users`, options);
  }

  postAuthenticate(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/authenticate`, options);
  }
}
