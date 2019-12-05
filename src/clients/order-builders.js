import Client from './client';

export default class OrderBuilders extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders`, {
      ...options,
       method: 'POST',
    });
  }

  putCartsByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/carts/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

  getByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}`, options);
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

  putAttributesByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}/attributes`, {
      ...options,
       method: 'PUT',
    });
  }

  putCountryByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}/country`, {
      ...options,
       method: 'PUT',
    });
  }

  putDestinationByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}/destination`, {
      ...options,
       method: 'PUT',
    });
  }

  putDutyByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}/duty`, {
      ...options,
       method: 'PUT',
    });
  }

  putInvoiceAndAddressByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}/invoice/address`, {
      ...options,
       method: 'PUT',
    });
  }

  putTaxAndRegistrationByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/order/builders/${encodeURIComponent(number)}/tax/registration`, {
      ...options,
       method: 'PUT',
    });
  }

}
