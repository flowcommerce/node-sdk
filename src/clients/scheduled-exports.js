import Client from './client';

export default class ScheduledExports extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/users/scheduled/exports`, options);
  }

  post(options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/users/scheduled/exports`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/scheduled/exports/${id}`, options);
  }

  putById(id, options = {}) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/users/scheduled/exports/${id}`, options);
  }

  deleteById(id, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/users/scheduled/exports/${id}`, options);
  }

}
