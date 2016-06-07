import Client from './client';

export default class HarmonizedItemDuties extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'harmonization',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties`, options);
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties/versions`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties/${id}`, options);
  }

}
