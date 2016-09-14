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
    return this.makeRequest(`${this.host}/${organization}/attributes`, options);
  }

  post(organization, options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/attributes`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/attributes/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/attributes/${key}`, options);
  }

  deleteByKey(organization, key, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/attributes/${key}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/attributes/versions`, options);
  }

}
