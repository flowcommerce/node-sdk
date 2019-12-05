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

  getOrderByNumber(number, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/order/${encodeURIComponent(number)}`, options);
  }

  getByIdhtml(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id.html)}`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id)}`, options);
  }

  postAddById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id)}/add`, {
      ...options,
       method: 'POST',
    });
  }

  putAttributesById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id)}/attributes`, {
      ...options,
       method: 'PUT',
    });
  }

  postChangeById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id)}/change`, {
      ...options,
       method: 'POST',
    });
  }

  postClearById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id)}/clear`, {
      ...options,
       method: 'POST',
    });
  }

  putGeoById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id)}/geo`, {
      ...options,
       method: 'PUT',
    });
  }

  postOrdersById(id, options = {}) {
    return this.makeRequest(`${this.host}/shopify/carts/${encodeURIComponent(id)}/orders`, {
      ...options,
       method: 'POST',
    });
  }

}
