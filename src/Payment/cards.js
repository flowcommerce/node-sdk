import Client from './client';

export default class Cards extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'payment',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/cards`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/cards/versions`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/cards/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/cards`, options);
  }

  postUpdatesById(organization, id, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/cards/${id}/updates`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/cards/${id}`, options);
  }

}
