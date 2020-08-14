import Client from './client';

export default class AbandonedOrderSettings extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/marketing/abandoned/order/settings`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/marketing/abandoned/order/settings`, {
      ...options,
       method: 'POST',
    });
  }

  put(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/marketing/abandoned/order/settings`, {
      ...options,
       method: 'PUT',
    });
  }

  delete(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/marketing/abandoned/order/settings`, {
      ...options,
       method: 'DELETE',
    });
  }

}
