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

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/countries`, options);
  }

  getOrganizations(options = {}) {
    return this.makeRequest(`${this.host}/organizations`, options);
  }

  postOrganizations(options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/organizations`, options);
  }

  getOrganizationsById(id, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  putOrganizationsById(id, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  deleteOrganizationsById(id, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  getOrganizationsAndSettingsAndCurrenciesByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/currencies`, options);
  }

  getOrganizationsAndVersions(options = {}) {
    return this.makeRequest(`${this.host}/organizations/versions`, options);
  }

}
