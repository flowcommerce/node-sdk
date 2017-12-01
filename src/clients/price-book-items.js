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

  get(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}/items`, options);
  }

  post(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}/items`, {
      ...options,
       method: 'POST',
    });
  }

  getByItemNumber(organization, key, itemNumber, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}/items/${itemNumber}`, options);
  }

  putByItemNumber(organization, key, itemNumber, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}/items/${itemNumber}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByItemNumber(organization, key, itemNumber, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}/items/${itemNumber}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
