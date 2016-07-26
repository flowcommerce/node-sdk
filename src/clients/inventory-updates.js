import Client from './client';

export default class InventoryUpdates extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_updates`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/inventory_updates`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_updates/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/inventory_updates/versions`, options);
  }

}
