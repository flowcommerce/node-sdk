import Client from './client';

export default class InventoryRules extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_rules`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/inventory_rules`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_rules/versions`, options);
  }

}
