import Client from './client';

export default class RatecardLanes extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/ratecard-lanes`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/ratecard-lanes`, {
      ...options,
       method: 'POST',
    });
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/ratecard-lanes/${id}`, options);
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/ratecard-lanes/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/ratecard-lanes/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
