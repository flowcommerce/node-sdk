import Client from './client';

export default class Webhooks extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhooks`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhooks`, {
      ...options,
       method: 'POST',
    });
  }

  getSettings(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhooks/settings`, options);
  }

  putSettings(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhooks/settings`, {
      ...options,
       method: 'PUT',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhooks/${id}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhooks/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhooks/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
