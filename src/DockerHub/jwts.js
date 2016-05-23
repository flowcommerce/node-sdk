import Client from './client';

export default class Jwts extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Docker Hub',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postLoginAnd(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/v2/users/login/`, options);
  }

}
