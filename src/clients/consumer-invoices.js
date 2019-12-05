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
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices`, options);
  }

  postExports(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/exports`, {
      ...options,
       method: 'POST',
    });
  }

  putOrderByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/order/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

  postCreditAndMemosByInvoiceKey(organization, invoiceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/${encodeURIComponent(invoiceKey)}/credit/memos`, {
      ...options,
       method: 'POST',
    });
  }

  putCreditAndMemosByInvoiceKeyAndKey(organization, invoiceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/${encodeURIComponent(invoiceKey)}/credit/memos/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteCreditAndMemosByInvoiceKeyAndKey(organization, invoiceKey, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/${encodeURIComponent(invoiceKey)}/credit/memos/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/${encodeURIComponent(key)}`, options);
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/consumer/invoices/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
