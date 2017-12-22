import Client from './client';

export default class Reservations extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/reservation`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/reservation/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/reservation/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/inventory/reservation/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
