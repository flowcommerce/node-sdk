import Client from './client';

export default class Healthchecks extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getHealthcheck(options = {}) {
    return this.makeRequest(`${this.host}/_internal_/healthcheck`, options);
  }

}
