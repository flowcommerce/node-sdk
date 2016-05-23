import Client from './client';

export default class Invitations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'organization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/invitations`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/invitations/versions`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/invitations/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/invitations`, options);
  }

  getTokensByToken(token, options) {
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, options);
  }

  putTokensByToken(token, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/invitations/tokens/${token}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/invitations/${id}`, options);
  }

}
