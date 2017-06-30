import Client from './client';

export default class Orders extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders`, {
      ...options,
      method: 'POST',
    });
  }

  getByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, options);
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, {
      ...options,
      method: 'PUT',
    });
  }

  deleteByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}`, {
      ...options,
      method: 'DELETE',
    });
  }

  putSubmissionsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/${number}/submissions`, {
      ...options,
      method: 'PUT',
    });
  }

  getIdentifierByIdentifierNumber(organization, identifierNumber, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/identifier/${identifierNumber}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/orders/versions`, options);
  }

}
