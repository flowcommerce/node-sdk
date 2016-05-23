import Client from './client';

export default class Displays extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'pricing',
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

  getByName(organization, name, options) {
    return this.makeRequest(`${this.host}/${organization}/displays/${name}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/displays`, options);
  }

  putByName(organization, name, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/displays/${name}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/displays/${id}`, options);
  }

}
