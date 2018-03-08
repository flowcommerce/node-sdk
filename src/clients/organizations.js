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

  getVersions(options = {}) {
    return this.makeRequest(`${this.host}/organizations/versions`, options);
  }

  getByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}`, options);
  }

  putByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}`, {
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

  getSettingsAndRegionsAndCountriesAndAvailableByOrganizationId(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/regions/countries/available`, options);
  }

  putSettingsAndRegionsByOrganizationIdAndRegion(organizationId, region, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/regions/${region}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteSettingsAndRegionsByOrganizationIdAndRegion(organizationId, region, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/settings/regions/${region}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
