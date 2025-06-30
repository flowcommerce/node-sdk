import Client from './client';

export default class KnowYourBusinesses extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  put(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shopify/merchant/config/know/your/business`, {
      ...options,
       method: 'PUT',
    });
  }

}
