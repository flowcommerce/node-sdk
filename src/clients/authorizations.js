import Client from './client';

export default class Authorizations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/${key}`, options);
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

  putValueByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/${key}/value`, {
      ...options,
       method: 'PUT',
    });
  }

  postCard(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/card`, {
      ...options,
       method: 'POST',
    });
  }

  postOnline(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/online`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/authorizations/versions`, options);
  }

}
