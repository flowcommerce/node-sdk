import Client from './client';

export default class Tokens extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/tokens`, options);
  }

  post(options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/tokens`, options);
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/tokens/${id}`, options);
  }

  deleteById(id, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/tokens/${id}`, options);
  }

  getCleartextById(id, options = {}) {
    return this.makeRequest(`${this.host}/tokens/${id}/cleartext`, options);
  }

  postAuthentications(options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/tokens/authentications`, options);
  }

}
