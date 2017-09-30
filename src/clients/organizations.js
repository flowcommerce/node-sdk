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

  getCountriesByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/countries`, options);
  }

  getCountriesAndDestinationsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/countries/destinations`, options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/organizations`, options);
  }

  post(options = {}) {
    return this.makeRequest(`${this.host}/organizations`, {
      ...options,
       method: 'POST',
    });
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${id}`, options);
  }

  putById(id, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(id, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getSettingsAndCurrenciesByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/currencies`, options);
  }

  getSettingsAndRegionsByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/regions`, options);
  }

  deleteSettingsAndRegionsByOrganizationIdAndId(organizationId, id, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/regions/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

  putSettingsAndRegionsByOrganizationIdAndRegion(organizationId, region, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/regions/${region}`, {
      ...options,
       method: 'PUT',
    });
  }

  getSettingsAndRegionsAndCountriesAndAvailableByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/regions/countries/available`, options);
  }

  getVersions(options = {}) {
    return this.makeRequest(`${this.host}/organizations/versions`, options);
  }

}
