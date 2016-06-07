import Client from './client';

export default class ShipmentLabels extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'fulfillment',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(trackingNumber, options) {
    return this.makeRequest(`${this.host}/shipments/${trackingNumber}/labels/versions`, options);
  }

  get(trackingNumber, options) {
    return this.makeRequest(`${this.host}/shipments/${trackingNumber}/labels`, options);
  }

  post(trackingNumber, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/shipments/${trackingNumber}/labels`, options);
  }

}
