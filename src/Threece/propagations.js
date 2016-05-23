import Client from './client';

export default class Propagations extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'threece',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getByProductIdAndDestinationsAndOrigin(apiKey, productId, destinations, origin, options) {
    return this.makeRequest(`${this.host}/propagate/${apiKey}/${productId}/${destinations}/${origin}`, options);
  }

}
