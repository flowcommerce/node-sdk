import Client from './client';

export default class ExclusionRules extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/exclusion/rules`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/exclusion/rules`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/exclusion/rules/versions`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/exclusion/rules/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  putDeletionById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/exclusion/rules/${encodeURIComponent(id)}/deletion`, {
      ...options,
       method: 'PUT',
    });
  }

}
