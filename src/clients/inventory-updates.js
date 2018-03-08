import Client from './client';

export default class InventoryUpdates extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory_updates`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory_updates`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory_updates/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory_updates/${id}`, options);
  }

}
