import Client from './client';

export default class SpotRates extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/spot_rates`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/spot_rates/versions`, options);
  }

}
