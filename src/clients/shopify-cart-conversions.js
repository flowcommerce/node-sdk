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

  postConversions(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/shopify/cart/conversions`, {
      ...options,
       method: 'POST',
    });
  }

}
