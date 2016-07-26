import Client from './client';

export default class HarmonizedItems extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items`, options);
  }

  getByNumber(organization, number, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${number}`, options);
  }

  putByNumber(organization, number, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${number}`, options);
  }

  deleteByNumber(organization, number, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/${number}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/items/versions`, options);
  }

}
