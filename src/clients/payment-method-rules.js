import Client from './client';

export default class PaymentMethodRules extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getPaymentMethodRules(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/payment-method-rules`, options);
  }

  getPaymentAndMethodAndRules(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/payment/method/rules`, options);
  }

}
