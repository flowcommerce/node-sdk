import Client from './client';

export default class Holidays extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'holiday',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/holidays`, options);
  }

}
