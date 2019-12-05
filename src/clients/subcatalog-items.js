import Client from './client';

export default class SubcatalogItems extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/items`, options);
  }

  getVersions(organization, subcatalogId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/items/versions`, options);
  }

  getByNumber(organization, subcatalogId, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/subcatalogs/${encodeURIComponent(subcatalogId)}/items/${encodeURIComponent(number)}`, options);
  }

}
