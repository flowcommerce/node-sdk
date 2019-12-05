import Client from './client';

export default class CardPaymentSources extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/sources/payments/cards`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/sources/payments/cards`, {
      ...options,
       method: 'POST',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/sources/payments/cards/${id}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/sources/payments/cards/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/sources/payments/cards/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
