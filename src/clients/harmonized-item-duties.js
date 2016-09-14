import Client from './client';

export default class HarmonizedItemDuties extends Client {
  constructor(opts) {
    let options = opts;
    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }
    options.serviceName = 'API';
    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties`, options);
  }

  post(organization, options = {}) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties`, options);
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties/${id}`, options);
  }

  deleteById(organization, id, options = {}) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties/${id}`, options);
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/harmonization/item-duties/versions`, options);
  }

}
