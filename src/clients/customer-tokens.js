import Client from './client';

export default class CustomerTokens extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customer/tokens`, options);
  }

  postLatestByCustomerNumber(organization, customerNumber, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customer/tokens/latest/${customerNumber}`, {
      ...options,
       method: 'POST',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customer/tokens/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getByToken(organization, token, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customer/tokens/${token}`, options);
  }

}
