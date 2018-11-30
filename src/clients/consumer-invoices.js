import Client from './client';

export default class ConsumerInvoices extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices`, options);
  }

  postExports(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/exports`, {
      ...options,
       method: 'POST',
    });
  }

  putOrderByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/order/${number}`, {
      ...options,
       method: 'PUT',
    });
  }

  postCreditAndMemosByInvoiceKey(organization, invoiceKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/${invoiceKey}/credit/memos`, {
      ...options,
       method: 'POST',
    });
  }

  putCreditAndMemosByInvoiceKeyAndKey(organization, invoiceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/${invoiceKey}/credit/memos/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteCreditAndMemosByInvoiceKeyAndKey(organization, invoiceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/${invoiceKey}/credit/memos/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/${key}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/${key}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/consumer/invoices/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
