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
    return this.makeRequest(`${this.host}/users/scheduled/exports`, {
      ...options,
       method: 'POST',
    });
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/scheduled/exports/${id}`, options);
  }

  putById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/scheduled/exports/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(id, options = {}) {
    return this.makeRequest(`${this.host}/users/scheduled/exports/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
