import Client from './client';

export default class Links extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(carrier, organization, orderNumber, options = {}) {
    return this.makeRequest(`${this.host}/carrier/${carrier}/data/${organization}/${orderNumber}`, options);
  }

}
