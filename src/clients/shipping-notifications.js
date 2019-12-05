import Client from './client';

export default class ShippingNotifications extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping-notifications`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping-notifications`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping-notifications/versions`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping-notifications/${encodeURIComponent(key)}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping-notifications/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/shipping-notifications/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
