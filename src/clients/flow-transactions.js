import Client from './client';

export default class FlowTransactions extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/internal/billing/transactions`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/internal/billing/transactions/${encodeURIComponent(id)}`, options);
  }

}
