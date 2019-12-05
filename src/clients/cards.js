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

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/cards`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/cards`, {
      ...options,
       method: 'POST',
    });
  }

  postNonces(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/cards/nonces`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/cards/versions`, options);
  }

  getByToken(organization, token, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/cards/${encodeURIComponent(token)}`, options);
  }

  deleteByToken(organization, token, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/cards/${encodeURIComponent(token)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
