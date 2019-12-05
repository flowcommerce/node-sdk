import Client from './client';

export default class Invitations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/invitations`, options);
  }

  post(options = {}) {
    return this.makeRequest(`${this.host}/invitations`, {
      ...options,
       method: 'POST',
    });
  }

  getTokensByToken(token, options = {}) {
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, options);
  }

  putTokensByToken(token, options = {}) {
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, {
      ...options,
       method: 'PUT',
    });
  }

  getVersions(options = {}) {
    return this.makeRequest(`${this.host}/invitations/versions`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/invitations/${id}`, options);
  }

  deleteById(id, options = {}) {
    return this.makeRequest(`${this.host}/invitations/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
