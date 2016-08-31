import Client from './client';

export default class Orders extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/orders`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/orders`, options);
  }

  getByNumber(organization, number, options) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, options);
  }

  putByNumber(organization, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, options);
  }

  deleteByNumber(organization, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, options);
  }

  putBookingsByNumber(organization, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/bookings`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/orders/versions`, options);
  }

}
