import Client from './client';

export default class Bookings extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/bookings`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/bookings`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/bookings/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/bookings/versions`, options);
  }

}
