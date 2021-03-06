import Client from './client';

export default class Suggestions extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getCatalog(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/suggestion/catalog`, options);
  }

}
