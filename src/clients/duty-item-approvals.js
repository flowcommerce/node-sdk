import Client from './client';

export default class DutyItemApprovals extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  putByNumber(organization, number, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/duty/item/approval/${encodeURIComponent(number)}`, {
      ...options,
       method: 'PUT',
    });
  }

}
