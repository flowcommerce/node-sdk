import Client from './client';

export default class Quotes extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'fulfillment',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/quotes/versions`, options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/quotes`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/quotes/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/quotes`, options);
  }

}
