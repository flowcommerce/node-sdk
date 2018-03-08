import Client from './client';

export default class OrderIdentifiers extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-identifiers`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-identifiers`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-identifiers/versions`, options);
  }

  getByIdentifier(organization, identifier, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-identifiers/${identifier}`, options);
  }

  putByIdentifier(organization, identifier, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-identifiers/${identifier}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByIdentifier(organization, identifier, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order-identifiers/${identifier}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
