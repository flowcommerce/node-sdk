import Client from './client';

export default class OrderSummaries extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order/summaries/${number}`, options);
  }

}
