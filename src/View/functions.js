import Client from './client';

export default class Functions extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'view',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/functions/versions`, options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/functions`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/functions/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/functions`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/functions/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/functions/${id}`, options);
  }

}
