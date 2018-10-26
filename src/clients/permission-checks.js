import Client from './client';

export default class PermissionChecks extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getPermissionAndChecksAndAllByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/permission/checks/all`, options);
  }

}