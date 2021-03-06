import Client from './client';

export default class Captures extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/captures`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/captures`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/captures/versions`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/captures/${encodeURIComponent(key)}`, options);
  }

  getIdentifiersByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/captures/${encodeURIComponent(key)}/identifiers`, options);
  }

  putIdentifiersByKeyAndIdentifier(organization, key, identifier, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/captures/${encodeURIComponent(key)}/identifiers/${encodeURIComponent(identifier)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteIdentifiersByKeyAndIdentifier(organization, key, identifier, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/captures/${encodeURIComponent(key)}/identifiers/${encodeURIComponent(identifier)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
