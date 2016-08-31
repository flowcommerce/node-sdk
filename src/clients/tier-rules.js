import Client from './client';

export default class TierRules extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, tierId, options) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules`, options);
  }

  post(organization, tierId, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules`, options);
  }

  getById(organization, tierId, id, options) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/${id}`, options);
  }

  putById(organization, tierId, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/${id}`, options);
  }

  deleteById(organization, tierId, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/${id}`, options);
  }

  getVersions(organization, tierId, options) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${tierId}/rules/versions`, options);
  }

}
