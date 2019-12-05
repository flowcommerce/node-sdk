import Client from './client';

export default class Attributes extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/attributes`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/attributes`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/attributes/versions`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/attributes/${encodeURIComponent(key)}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/attributes/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/attributes/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
