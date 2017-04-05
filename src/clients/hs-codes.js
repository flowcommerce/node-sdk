import Client from './client';

export default class HsCodes extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(options = {}) {
    return this.makeRequest(`${this.host}/harmonization/codes`, options);
  }

  getByCode(code, options = {}) {
    return this.makeRequest(`${this.host}/harmonization/codes/${code}`, options);
  }

}
