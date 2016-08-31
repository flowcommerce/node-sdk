import Client from './client';

export default class Rates extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/currency/rates`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/currency/rates`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/currency/rates/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/currency/rates/versions`, options);
  }

}
