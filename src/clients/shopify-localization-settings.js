import Client from './client';

export default class ShopifyLocalizationSettings extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/localization/settings`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/localization/settings`, {
      ...options,
       method: 'POST',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/localization/settings/${encodeURIComponent(id)}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/localization/settings/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/localization/settings/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
