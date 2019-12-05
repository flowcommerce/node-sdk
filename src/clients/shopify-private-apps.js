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
    return this.makeRequest(`${this.host}/${organization}/shopify/private/apps`, options);
  }

  put(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shopify/private/apps`, {
      ...options,
       method: 'PUT',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shopify/private/apps/${id}`, options);
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shopify/private/apps/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
