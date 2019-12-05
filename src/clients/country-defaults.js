import Client from './client';

export default class CountryDefaults extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/geolocation/defaults`, options);
  }

  getByCountry(country, options = {}) {
    return this.makeRequest(`${this.host}/geolocation/defaults/${country}`, options);
  }

}
