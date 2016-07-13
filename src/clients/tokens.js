import Client from './client';

export default class Tokens extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/tokens`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/tokens`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/tokens/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/tokens/${id}`, options);
  }

  getCleartextById(id, options) {
    return this.makeRequest(`${this.host}/tokens/${id}/cleartext`, options);
  }

  postAuthentications(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/tokens/authentications`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/tokens/versions`, options);
  }

}
