import Client from './client';

export default class Subscriptions extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'splashpage',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/subscriptions`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/subscriptions/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/subscriptions`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/subscriptions/${id}`, options);
  }

}
