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
    return this.makeRequest(`${this.host}/${organization}/attributes`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/attributes/versions`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/attributes/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/attributes/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/attributes/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
