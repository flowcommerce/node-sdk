import Client from './client';

export default class CheckoutTokens extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getCheckoutAndTokensById(id, options = {}) {
    return this.makeRequest(`${this.host}/checkout/tokens/${encodeURIComponent(id)}`, options);
  }

  deleteCheckoutAndTokensById(id, options = {}) {
    return this.makeRequest(`${this.host}/checkout/tokens/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  postCheckoutAndTokensByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/checkout/tokens`, {
      ...options,
       method: 'POST',
    });
  }

}
