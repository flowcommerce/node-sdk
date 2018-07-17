import Client from './client';

export default class LoyaltyPrograms extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/loyalty/${number}`, options);
  }

  post(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/loyalty/${number}`, {
      ...options,
       method: 'POST',
    });
  }

  deleteById(organization, number, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/loyalty/${number}/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
