import Client from './client';

export default class Serials extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/serials`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/serials`, {
      ...options,
       method: 'POST',
    });
  }

  getPricesByAggregate(organization, aggregate, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/serials/prices/${aggregate}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/serials/versions`, options);
  }

  getByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/serials/${number}`, options);
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/serials/${number}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/serials/${number}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
