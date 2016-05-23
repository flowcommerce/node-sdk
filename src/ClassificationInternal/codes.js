import Client from './client';

export default class Codes extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'classification-internal',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(source, options) {
    return this.makeRequest(`${this.host}/codes/${source}`, options);
  }

  getByCode(source, code, options) {
    return this.makeRequest(`${this.host}/codes/${source}/${code}`, options);
  }

}
