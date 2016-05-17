import Client from '../client';

export default class Displays extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'view',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/displays`, options);
  }

  put(organization, displayId, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/displays/${displayId}`, options);
  }

}
