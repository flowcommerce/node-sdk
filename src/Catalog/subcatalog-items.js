import Client from './client';

export default class SubcatalogItems extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'catalog',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, subcatalog, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/versions`, options);
  }

  get(organization, subcatalog, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items`, options);
  }

  getById(organization, subcatalog, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/${id}`, options);
  }

  post(organization, subcatalog, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items`, options);
  }

  putById(organization, subcatalog, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/${id}`, options);
  }

  deleteById(organization, subcatalog, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${subcatalog}/items/${id}`, options);
  }

}
