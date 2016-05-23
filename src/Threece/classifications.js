import Client from './client';

export default class Classifications extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'threece',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getByClientProductIdAndDescription(apiKey, clientProductId, description, options) {
    return this.makeRequest(`${this.host}/classify/${apiKey}/${clientProductId}/${description}`, options);
  }

}
