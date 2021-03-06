import Client from './client';

export default class DeliveryWindows extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getSummary(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/delivery-windows/summary`, options);
  }

  getSummaryAndAll(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/delivery-windows/summary/all`, options);
  }

}
