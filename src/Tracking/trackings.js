import Client from './client';

export default class Trackings extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'tracking',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(options) {
    return this.makeRequest(`${this.host}/trackings/versions`, options);
  }

  get(options) {
    return this.makeRequest(`${this.host}/trackings`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/trackings/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/trackings`, options);
  }

}
