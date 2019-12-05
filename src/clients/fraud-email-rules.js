import Client from './client';

export default class FraudEmailRules extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/fraud/email/rules`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/fraud/email/rules`, {
      ...options,
       method: 'POST',
    });
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/fraud/email/rules/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
