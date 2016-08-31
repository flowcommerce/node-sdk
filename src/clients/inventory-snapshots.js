import Client from './client';

export default class InventorySnapshots extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_snapshots`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_snapshots/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_snapshots/versions`, options);
  }

}
