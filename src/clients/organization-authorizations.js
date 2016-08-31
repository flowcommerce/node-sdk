import Client from './client';

export default class OrganizationAuthorizations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getByOrganization(organization, options) {
    return this.makeRequest(`${this.host}/organization-authorizations/${organization}`, options);
  }

}
