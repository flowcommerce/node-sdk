import Client from './client';

export default class Addresses extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/addresses`, options);
  }

  postVerifications(options = {}) {
    return this.makeRequest(`${this.host}/addresses/verifications`, {
      ...options,
       method: 'POST',
    });
  }

}
