import Client from './client';

export default class Trackings extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  getTrackingsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/trackings`, options);
  }

  postTrackingsByOrganization(organization, options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/trackings`, options);
  }

  getTrackingsAndVersionsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/trackings/versions`, options);
  }

  getTrackingsById(id, options = {}) {
    return this.makeRequest(`${this.host}/trackings/${id}`, options);
  }

}
