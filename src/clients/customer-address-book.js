import Client from './client';

export default class CustomerAddressBook extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customers/${number}/addresses/book`, options);
  }

  patch(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customers/${number}/addresses/book`, {
      ...options,
       method: 'PATCH',
    });
  }

}
