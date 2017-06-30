import Client from './client';

export default class Items extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items`, {
      ...options,
      method: 'POST',
    });
  }

  getByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items/${number}`, options);
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items/${number}`, {
      ...options,
      method: 'PUT',
    });
  }

  deleteByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items/${number}`, {
      ...options,
      method: 'DELETE',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/catalog/items/versions`, options);
  }

}
