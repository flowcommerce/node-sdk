import Client from './client';

export default class KubeHealthchecks extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getLive(options = {}) {
    return this.makeRequest(`${this.host}/_internal_/live`, options);
  }

  getReady(options = {}) {
    return this.makeRequest(`${this.host}/_internal_/ready`, options);
  }

  getStartup(options = {}) {
    return this.makeRequest(`${this.host}/_internal_/startup`, options);
  }

}
