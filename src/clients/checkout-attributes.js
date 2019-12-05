import Client from './client';

export default class CheckoutAttributes extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/checkout/attributes`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/checkout/attributes`, {
      ...options,
       method: 'POST',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/checkout/attributes/${id}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/checkout/attributes/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/checkout/attributes/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
