import Client from './client';

export default class PartnerTokens extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(partner, options = {}) {
    return this.makeRequest(`${this.host}/partners/${partner}/tokens`, options);
  }

  post(partner, options = {}) {
    return this.makeRequest(`${this.host}/partners/${partner}/tokens`, {
      ...options,
       method: 'POST',
    });
  }

}
