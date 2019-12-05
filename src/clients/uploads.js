import Client from './client';

export default class Uploads extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  postByName(organization, name, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/uploads/${name}`, {
      ...options,
       method: 'POST',
    });
  }

}
