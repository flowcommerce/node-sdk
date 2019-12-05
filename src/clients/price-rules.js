import Client from './client';

export default class PriceRules extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, code, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/price/rules/discount/${encodeURIComponent(code)}`, options);
  }

}
