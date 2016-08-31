import Client from './client';

export default class CountryDefaults extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/geolocation/defaults`, options);
  }

  getByCountry(country, options) {
    return this.makeRequest(`${this.host}/geolocation/defaults/${country}`, options);
  }

}
