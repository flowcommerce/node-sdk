import Client from './client';

export default class WebhookDeliveries extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhook/deliveries`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhook/deliveries/${id}`, options);
  }

  postRequestsById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/webhook/deliveries/${id}/requests`, {
      ...options,
       method: 'POST',
    });
  }

}
