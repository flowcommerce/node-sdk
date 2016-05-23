import Client from './client';

export default class AccessTokens extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'Github Oauth',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  postAccessToken(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/login/oauth/access_token`, options);
  }

}
