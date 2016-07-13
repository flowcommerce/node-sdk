import Client from './client';

export default class SubcatalogItems extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, subcatalog, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items`, options);
  }

  post(organization, subcatalog, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items`, options);
  }

  getByNumber(organization, subcatalog, number, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/${number}`, options);
  }

  putByNumber(organization, subcatalog, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/${number}`, options);
  }

  deleteByNumber(organization, subcatalog, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/${number}`, options);
  }

  getVersions(organization, subcatalog, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/versions`, options);
  }

}
