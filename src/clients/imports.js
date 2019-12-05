import Client from './client';

export default class Imports extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/imports`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/imports`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/imports/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/imports/${id}`, options);
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/imports/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
