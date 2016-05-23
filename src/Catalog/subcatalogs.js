import Client from './client';

export default class Subcatalogs extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'catalog',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/versions`, options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}`, options);
  }

  getSettingsById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, options);
  }

  putSettingsById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/settings`, options);
  }

  postEventsByIdAndEvent(organization, id, event, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${id}/events/${event}`, options);
  }

}
