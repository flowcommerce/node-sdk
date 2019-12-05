import Client from './client';

export default class Tiers extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${id}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tiers/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
