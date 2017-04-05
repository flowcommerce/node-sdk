import Client from './client';

export default class EmailVerifications extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  postByToken(token, options = {}) {
    return this.makeRequest(`${this.host}/users/emails/verifications/${token}`, {
      ...options,
       method: 'POST',
    });
  }

}
