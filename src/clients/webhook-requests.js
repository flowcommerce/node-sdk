import Client from './client';

export default class WebhookRequests extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/webhook/requests`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/webhook/requests/${id}`, options);
  }

  postRedeliveriesById(organization, id, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/webhook/requests/${id}/redeliveries`, options);
  }

}
