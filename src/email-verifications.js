import Client from './client';

export default class EmailVerifications extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postByToken(token, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/emails/verifications/${token}`, options);
  }

}
