import Client from './client';

export default class DimensionEstimates extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/dimension-estimates`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/dimension-estimates`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/dimension-estimates/versions`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/dimension-estimates/${id}`, options);
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/dimension-estimates/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
