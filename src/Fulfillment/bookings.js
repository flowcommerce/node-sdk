import Client from './client';

export default class Bookings extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'fulfillment',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/bookings/versions`, options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/bookings`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/bookings/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/bookings`, options);
  }

}
