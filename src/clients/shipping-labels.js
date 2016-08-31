import Client from './client';

export default class ShippingLabels extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/shipping_labels`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/shipping_labels`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/shipping_labels/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/shipping_labels/versions`, options);
  }

}
