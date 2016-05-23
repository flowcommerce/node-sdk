import Client from './client';

export default class Events extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
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

}
