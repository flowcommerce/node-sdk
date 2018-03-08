import Client from './client';

export default class Users extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/users`, options);
  }

  post(options = {}) {
    return this.makeRequest(`${this.host}/users`, {
      ...options,
       method: 'POST',
    });
  }

  postAuthenticate(options = {}) {
    return this.makeRequest(`${this.host}/users/authenticate`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(options = {}) {
    return this.makeRequest(`${this.host}/users/versions`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/${id}`, options);
  }

  putById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  patchPasswordsById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/${id}/passwords`, {
      ...options,
       method: 'PATCH',
    });
  }

  deletePasswordsById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/${id}/passwords`, {
      ...options,
       method: 'DELETE',
    });
  }

}
