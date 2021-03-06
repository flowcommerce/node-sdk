import Client from './client';

export default class ShopifyPrivateApps extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/private/apps`, options);
  }

  put(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/private/apps`, {
      ...options,
       method: 'PUT',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/private/apps/${encodeURIComponent(id)}`, options);
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/private/apps/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
