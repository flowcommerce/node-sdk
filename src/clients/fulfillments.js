import Client from './client';

export default class Fulfillments extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/fulfillments`, options);
  }

  putCancellations(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/fulfillments/cancellations`, {
      ...options,
       method: 'PUT',
    });
  }

  putCompleteAndCancellations(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/fulfillments/complete/cancellations`, {
      ...options,
       method: 'PUT',
    });
  }

}
