import Client from './client';

export default class Manifests extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/manifests`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/manifests`, {
      ...options,
       method: 'POST',
    });
  }

  getServicesAndOutstandingByService(organization, service, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/manifests/services/${service}/outstanding`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/manifests/${id}`, options);
  }

}
