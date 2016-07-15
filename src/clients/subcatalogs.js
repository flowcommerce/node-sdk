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

  getByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${key}`, options);
  }

  putByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${key}`, options);
  }

  deleteByKey(organization, key, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${key}`, options);
  }

  postEventsByKeyAndEvent(organization, key, event, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${key}/events/${event}`, options);
  }

  getSettingsByKey(organization, key, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${key}/settings`, options);
  }

  putSettingsByKey(organization, key, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/${key}/settings`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/catalog/subcatalogs/versions`, options);
  }

}
