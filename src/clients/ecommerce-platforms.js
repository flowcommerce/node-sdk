import Client from './client';

export default class EcommercePlatforms extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${encodeURIComponent(organizationId)}/ecommerce/platform`, options);
  }

  put(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${encodeURIComponent(organizationId)}/ecommerce/platform`, {
      ...options,
       method: 'PUT',
    });
  }

}
