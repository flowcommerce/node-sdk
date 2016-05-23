import Client from './client';

export default class Users extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getUser(options) {
    return this.makeRequest(`${this.host}/user`, options);
  }

}
