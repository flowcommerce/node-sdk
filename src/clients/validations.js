import Client from './client';

export default class Validations extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  post(options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/token-validations`, options);
  }

}
