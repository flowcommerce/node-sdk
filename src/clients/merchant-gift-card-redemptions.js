import Client from './client';

export default class MerchantGiftCardRedemptions extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(options = {}) {
    return this.makeRequest(`${this.host}/redeem`, {
      ...options,
       method: 'POST',
    });
  }

}
