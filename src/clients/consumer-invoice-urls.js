import Client from './client';

export default class ConsumerInvoiceUrls extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getTokensAndTypeByTokenAndType(token, type, options = {}) {
    return this.makeRequest(`${this.host}/consumer/invoice/tokens/${token}/type/${type}`, options);
  }

}
