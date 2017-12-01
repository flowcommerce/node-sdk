import Client from './client';

export default class PriceBooks extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/price/books/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
