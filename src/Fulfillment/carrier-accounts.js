import Client from './client';

export default class CarrierAccounts extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'fulfillment',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  getVersions(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/carrier_accounts/versions`, options);
  }

  get(organization, options) {
    return this.makeRequest(`${this.host}/${organization}/carrier_accounts`, options);
  }

  getById(organization, id, options) {
    return this.makeRequest(`${this.host}/${organization}/carrier_accounts/${id}`, options);
  }

  post(organization, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/${organization}/carrier_accounts`, options);
  }

  putById(organization, id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/${organization}/carrier_accounts/${id}`, options);
  }

  deleteById(organization, id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/${organization}/carrier_accounts/${id}`, options);
  }

}
