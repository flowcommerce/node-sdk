import Client from './client';

export default class Events extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/events`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/events/${id}`, options);
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/events/versions`, options);
  }

}
