import Client from './client';

export default class Documents extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'search',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/search`, options);
  }

}
