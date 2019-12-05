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

  postAuthentications(options = {}) {
    return this.makeRequest(`${this.host}/tokens/authentications`, {
      ...options,
       method: 'POST',
    });
  }

  getById(id, options = {}) {
    return this.makeRequest(`${this.host}/tokens/${id}`, options);
  }

  deleteById(id, options = {}) {
    return this.makeRequest(`${this.host}/tokens/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getCleartextById(id, options = {}) {
    return this.makeRequest(`${this.host}/tokens/${id}/cleartext`, options);
  }

}
