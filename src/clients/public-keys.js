import Client from './client';

export default class PublicKeys extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/encryption/keys`, options);
  }

  getLatest(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/encryption/keys/latest`, options);
  }

}
