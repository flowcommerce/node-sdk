import Client from './client';

export default class Subcatalogs extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'API',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  postEventsByIdAndEvent(organization, id, event, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/events/${event}`, options);
  }

  getSettingsById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, options);
  }

  putSettingsById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/versions`, options);
  }

}
