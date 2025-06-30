import Client from './client';

export default class TradeAgreements extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/trade/agreements`, options);
  }

  post(options = {}) {
    return this.makeRequest(`${this.host}/trade/agreements`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(key, options = {}) {
    return this.makeRequest(`${this.host}/trade/agreements/${encodeURIComponent(key)}`, options);
  }

  putByKey(key, options = {}) {
    return this.makeRequest(`${this.host}/trade/agreements/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(key, options = {}) {
    return this.makeRequest(`${this.host}/trade/agreements/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
