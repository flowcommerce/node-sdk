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

  get(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/items`, options);
  }

  post(organization, subcatalogId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/items`, options);
  }

  getByNumber(organization, subcatalogId, number, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/items/${number}`, options);
  }

  putByNumber(organization, subcatalogId, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/items/${number}`, options);
  }

  deleteByNumber(organization, subcatalogId, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/items/${number}`, options);
  }

  getVersions(organization, subcatalogId, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalogId}/items/versions`, options);
  }

}
