import Client from '../client';

export default class Views extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'view',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/views`, options);
  }

  getByName(organization, name, options) {
    return this.makeRequest(`${this.host}/${organization}/views/${name}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/views`, options);
  }

  put(organization, viewName, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/views/${viewName}`, options);
  }
}
