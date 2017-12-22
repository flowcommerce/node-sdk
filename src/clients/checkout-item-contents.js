import Client from './client';

export default class CheckoutItemContents extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getCheckout(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/item/content/checkout`, options);
  }

}
