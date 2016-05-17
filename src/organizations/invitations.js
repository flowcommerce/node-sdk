import Client from '../client';

export default class Invitations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'organization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getTokensByToken(token, options) {
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/invitations`, options);
  }

  putTokensByToken(token, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, options);
  }

}
