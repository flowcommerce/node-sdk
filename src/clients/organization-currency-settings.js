import Client from './client';

export default class OrganizationCurrencySettings extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/currency/settings`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/currency/settings`, options);
  }

  put(organization, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/currency/settings`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/currency/settings/versions`, options);
  }

}
