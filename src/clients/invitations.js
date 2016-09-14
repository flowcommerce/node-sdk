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
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/invitations`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/invitations/${id}`, options);
  }

  deleteById(id, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/invitations/${id}`, options);
  }

  getTokensByToken(token, options = {}) {
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, options);
  }

  putTokensByToken(token, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, options);
  }

  getVersions(options = {}) {
    return this.makeRequest(`${this.host}/invitations/versions`, options);
  }

}
