import Client from './client';

export default class Memberships extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/memberships`, options);
  }

  post(options = {}) {
    return this.makeRequest(`${this.host}/memberships`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(options = {}) {
    return this.makeRequest(`${this.host}/memberships/versions`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/memberships/${id}`, options);
  }

  putById(id, options = {}) {
    return this.makeRequest(`${this.host}/memberships/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(id, options = {}) {
    return this.makeRequest(`${this.host}/memberships/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
