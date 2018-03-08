import Client from './client';

export default class TierDefaults extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tier_defaults`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tier_defaults`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tier_defaults/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tier_defaults/${id}`, options);
  }

}
