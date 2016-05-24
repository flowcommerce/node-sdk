import Client from './client';

export default class Displays extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'experience',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/displays/versions`, options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/displays`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/displays/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/displays`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/displays/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/displays/${id}`, options);
  }

}
