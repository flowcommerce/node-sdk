import Client from './client';

export default class SurchargeSettings extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getDisplays(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/surcharge/settings/displays`, options);
  }

}
