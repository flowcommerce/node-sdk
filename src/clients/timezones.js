import Client from './client';

export default class Timezones extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getGeolocationAndTimezones(options = {}) {
    return this.makeRequest(`${this.host}/geolocation/timezones`, options);
  }

  getReferenceAndTimezones(options = {}) {
    return this.makeRequest(`${this.host}/reference/timezones`, options);
  }

}
