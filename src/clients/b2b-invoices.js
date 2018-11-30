import Client from './client';

export default class B2bInvoices extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/b2b/invoices`, options);
  }

  postExports(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/b2b/invoices/exports`, {
      ...options,
       method: 'POST',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/b2b/invoices/${key}`, options);
  }

}
