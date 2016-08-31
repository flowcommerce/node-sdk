import Client from './client';

export default class Carriers extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/carriers`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/carriers/${id}`, options);
  }

}
