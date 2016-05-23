import Client from './client';

export default class UserEmails extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/user/emails`, options);
  }

}
