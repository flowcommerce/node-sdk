import Client from './client';

export default class Refunds extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/refunds`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/refunds`, {
      ...options,
       method: 'POST',
    });
  }

  getSummaryByOrderNumber(organization, orderNumber, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/refunds/summary/${orderNumber}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/refunds/versions`, options);
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/refunds/${key}`, options);
  }

}
