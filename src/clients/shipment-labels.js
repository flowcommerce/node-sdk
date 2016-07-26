import Client from './client';

export default class ShipmentLabels extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, trackingNumber, options) {
    return this.makeRequest(`${this.host}/${organization}/shipments/${trackingNumber}/labels`, options);
  }

  post(organization, trackingNumber, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/shipments/${trackingNumber}/labels`, options);
  }

  getVersions(organization, trackingNumber, options) {
    return this.makeRequest(`${this.host}/${organization}/shipments/${trackingNumber}/labels/versions`, options);
  }

}
