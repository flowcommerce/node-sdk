import Client from './client';

export default class Passphrases extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'payment-internal',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/passphrases`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/passphrases/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/passphrases`, options);
  }

  postAuthenticationsById(id, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/passphrases/${id}/authentications`, options);
  }

}
