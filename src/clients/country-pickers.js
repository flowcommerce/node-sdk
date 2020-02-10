import Client from './client';

export default class CountryPickers extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/country/picker`, options);
  }

  put(organizationId, options = {}) {
    return this.makeRequest(`${this.host}/organizations/${organizationId}/country/picker`, {
      ...options,
       method: 'PUT',
    });
  }

}
