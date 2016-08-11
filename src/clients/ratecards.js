import Client from './client';

export default class Ratecards extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/ratecards`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/${id}`, options);
  }

  putPublishById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/ratecards/${id}/publish`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/ratecards/versions`, options);
  }

}
