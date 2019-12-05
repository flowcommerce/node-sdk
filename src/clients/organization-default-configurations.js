import Client from './client';

export default class OrganizationDefaultConfigurations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organizationId)}/default/configurations`, options);
  }

  putCheckout(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organizationId)}/default/configurations/checkout`, {
      ...options,
       method: 'PUT',
    });
  }

}
