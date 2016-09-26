import Client from './client';

export default class TrackingEvents extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tracking-events`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tracking-events/${id}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/tracking-events/versions`, options);
  }

}