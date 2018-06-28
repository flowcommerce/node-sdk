import Client from './client';

export default class VirtualCardRefunds extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/virtual/card/refunds`, options);
  }

  getByVirtualCardId(organization, virtualCardId, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/virtual/card/refunds/${virtualCardId}`, options);
  }

}
