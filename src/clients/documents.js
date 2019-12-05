import Client from './client';

export default class Documents extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getCatalog(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/search/catalog`, options);
  }

  getHarmonization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/search/harmonization`, options);
  }

}
