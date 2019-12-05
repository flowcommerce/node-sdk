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

  getTrackingsById(id, options = {}) {
    return this.makeRequest(`${this.host}/trackings/${encodeURIComponent(id)}`, options);
  }

  getTrackingsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/trackings`, options);
  }

  postTrackingsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/trackings`, {
      ...options,
       method: 'POST',
    });
  }

  getTrackingsAndVersionsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/trackings/versions`, options);
  }

}
