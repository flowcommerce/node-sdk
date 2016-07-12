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
