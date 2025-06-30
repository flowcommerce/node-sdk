import Client from './client';

export default class OrganizationDefaultBankAccounts extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/default/bank/accounts`, options);
  }

  put(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/default/bank/accounts`, {
      ...options,
       method: 'PUT',
    });
  }

  delete(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/default/bank/accounts`, {
      ...options,
       method: 'DELETE',
    });
  }

}
