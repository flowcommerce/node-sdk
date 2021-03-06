import Client from './client';

export default class ShippingConfigurationCopies extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  postByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping/configuration/copies/${encodeURIComponent(key)}`, {
      ...options,
       method: 'POST',
    });
  }

}
