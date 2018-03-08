import Client from './client';

export default class OrderBuilders extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order/builders`, {
      ...options,
       method: 'POST',
    });
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order/builders/${number}`, {
      ...options,
       method: 'PUT',
    });
  }

  putDestinationByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order/builders/${number}/destination`, {
      ...options,
       method: 'PUT',
    });
  }

  putDutyByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order/builders/${number}/duty`, {
      ...options,
       method: 'PUT',
    });
  }

}
