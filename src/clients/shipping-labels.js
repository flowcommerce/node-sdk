import Client from './client';

export default class ShippingLabels extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping_labels`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping_labels`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping_labels/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/shipping_labels/${id}`, options);
  }

}
