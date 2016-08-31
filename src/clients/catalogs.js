import Client from './client';

export default class Catalogs extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getCatalog(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog`, options);
  }

  getCatalogAndStatistics(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/statistics`, options);
  }

}
