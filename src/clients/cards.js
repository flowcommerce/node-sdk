import Client from './client';

export default class Cards extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/cards`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/cards`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/cards/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/cards/${id}`, options);
  }

  postUpdatesById(organization, id, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/cards/${id}/updates`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/cards/versions`, options);
  }

}
