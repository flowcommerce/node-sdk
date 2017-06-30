import Client from './client';

export default class Queries extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  postValidations(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/query/validations`, {
      ...options,
       method: 'POST',
    });
  }

}
