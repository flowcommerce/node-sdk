import Client from './client';

export default class OrderPromotions extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  deleteByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/order/promotions/${key}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
