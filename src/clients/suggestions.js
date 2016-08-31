import Client from './client';

export default class Suggestions extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getCatalog(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/suggestion/catalog`, options);
  }

  getHarmonization(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/suggestion/harmonization`, options);
  }

}
