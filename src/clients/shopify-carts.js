import Client from './client';

export default class ShopifyCarts extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getByIdhtml(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id.html}`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id}`, options);
  }

  postAddById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id}/add`, {
      ...options,
       method: 'POST',
    });
  }

  putAttributesById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id}/attributes`, {
      ...options,
       method: 'PUT',
    });
  }

  postChangeById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id}/change`, {
      ...options,
       method: 'POST',
    });
  }

  postClearById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id}/clear`, {
      ...options,
       method: 'POST',
    });
  }

  putGeoById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id}/geo`, {
      ...options,
       method: 'PUT',
    });
  }

  postOrdersById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${id}/orders`, {
      ...options,
       method: 'POST',
    });
  }

}
