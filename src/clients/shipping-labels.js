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

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/shipping_label`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/shipping_label`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/shipping_label/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/shipping_label/versions`, options);
  }

}
