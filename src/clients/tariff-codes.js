import Client from './client';

export default class TariffCodes extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(destination, options = {}) {
    return this.makeRequest(`${this.host}/harmonization/tariff-codes/${destination}`, options);
  }

  getByCode(destination, code, options = {}) {
    return this.makeRequest(`${this.host}/harmonization/tariff-codes/${destination}/${code}`, options);
  }

}
