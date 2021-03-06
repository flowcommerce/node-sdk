import Client from './client';

export default class FlowRoles extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getOrganizationAndRolesByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/permission/organization/${encodeURIComponent(organization)}/roles`, options);
  }

}
