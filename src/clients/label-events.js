import Client from './client';

export default class LabelEvents extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/label_events`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/label_events/${id}`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/label_events/versions`, options);
  }

}
