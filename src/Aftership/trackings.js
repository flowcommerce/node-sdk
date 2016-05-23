import Client from './client';

export default class Trackings extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'aftership',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/trackings`, options);
  }

  getBySlugAndTrackingNumber(slug, trackingNumber, options) {
    return this.makeRequest(`${this.host}/trackings/${slug}/${trackingNumber}`, options);
  }

}
