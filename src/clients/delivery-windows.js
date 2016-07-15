import Client from './client';

export default class DeliveryWindows extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getSummary(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/delivery-windows/summary`, options);
  }

}
