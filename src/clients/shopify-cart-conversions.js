import Client from './client';

export default class ShopifyCartConversions extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/experiences/${experienceKey}/shopify/cart/conversions`, {
      ...options,
       method: 'POST',
    });
  }

}
