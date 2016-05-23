import Client from './client';

export default class Catalogs extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'catalog',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getCatalog(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog`, options);
  }

}
