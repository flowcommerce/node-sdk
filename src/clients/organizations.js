import Client from './client';

export default class Organizations extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/organizations`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/organizations`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  getSettingsAndCurrenciesByOrganizationId(organizationId, options) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/currencies`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/organizations/versions`, options);
  }

}
