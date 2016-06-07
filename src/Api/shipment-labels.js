import Client from './client';

export default class ShipmentLabels extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(trackingNumber, options) {
    return this.makeRequest(`${this.host}/shipments/${trackingNumber}/labels`, options);
  }

  post(trackingNumber, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/shipments/${trackingNumber}/labels`, options);
  }

  getVersions(trackingNumber, options) {
    return this.makeRequest(`${this.host}/shipments/${trackingNumber}/labels/versions`, options);
  }

}
