import Client from './client';

export default class Sources extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'classification-internal',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/codes`, options);
  }

}
