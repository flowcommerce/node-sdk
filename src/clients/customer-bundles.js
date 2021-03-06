import Client from './client';

export default class CustomerBundles extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getBundleByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/customers/${encodeURIComponent(number)}/bundle`, options);
  }

}
