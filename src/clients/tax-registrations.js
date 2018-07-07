import Client from './client';

export default class TaxRegistrations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tax/registrations`, {
      ...options,
       method: 'POST',
    });
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tax/registrations/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

}
