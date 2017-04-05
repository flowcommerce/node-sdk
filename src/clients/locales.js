import Client from './client';

export default class Locales extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/reference/locales`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/reference/locales/${id}`, options);
  }

}
