import Client from './client';

export default class TierRules extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, tierId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules`, options);
  }

  post(organization, tierId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, tierId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/versions`, options);
  }

  getById(organization, tierId, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/${id}`, options);
  }

  putById(organization, tierId, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, tierId, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
