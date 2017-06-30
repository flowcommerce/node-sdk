import Client from './client';

export default class OrderEstimates extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-estimates`, {
      ...options,
      method: 'POST',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-estimates/${id}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-estimates/${id}`, {
      ...options,
      method: 'PUT',
    });
  }

}
