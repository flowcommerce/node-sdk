import Client from './client';

export default class PriceBookItems extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, priceBookKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${priceBookKey}/items`, options);
  }

  post(organization, priceBookKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${priceBookKey}/items`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(organization, priceBookKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${priceBookKey}/items/${key}`, options);
  }

  putByKey(organization, priceBookKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${priceBookKey}/items/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, priceBookKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${priceBookKey}/items/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
