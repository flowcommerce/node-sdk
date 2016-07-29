import Client from './client';

export default class Services extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/services`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/services`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/services/${id}`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/services/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/services/${id}`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/services/versions`, options);
  }

}