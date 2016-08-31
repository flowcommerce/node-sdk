import Client from './client';

export default class Cards extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/cards`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/cards`, options);
  }

  getByToken(organization, token, options) {
    return this.makeRequest(`${this.host}/${organization}/cards/${token}`, options);
  }

  deleteByToken(organization, token, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/cards/${token}`, options);
  }

  postUpdatesByToken(organization, token, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/cards/${token}/updates`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/cards/versions`, options);
  }

}
