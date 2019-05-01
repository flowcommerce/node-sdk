import Client from './client';

export default class CustomerAddressBookContacts extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customers/${number}/addresses/book/contacts`, options);
  }

  post(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customers/${number}/addresses/book/contacts`, {
      ...options,
       method: 'POST',
    });
  }

  getById(organization, number, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customers/${number}/addresses/book/contacts/${id}`, options);
  }

  putById(organization, number, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customers/${number}/addresses/book/contacts/${id}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteById(organization, number, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/customers/${number}/addresses/book/contacts/${id}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
