import Client from './client';

export default class Catalogs extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getCatalog(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog`, options);
  }

  getCatalogAndRestrictions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/restrictions`, options);
  }

  getCatalogAndRestrictionsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/restrictions/${encodeURIComponent(number)}`, options);
  }

  putCatalogAndRestrictionsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/restrictions/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteCatalogAndRestrictionsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/restrictions/${encodeURIComponent(number)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getCatalogAndStatistics(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/catalog/statistics`, options);
  }

}
