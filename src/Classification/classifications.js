import Client from './client';

export default class Classifications extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'classification',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/classifications`, options);
  }

}
