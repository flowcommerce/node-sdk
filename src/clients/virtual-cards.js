import Client from './client';

export default class VirtualCards extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  putAuthorizationsByKeyAndAuthorizationKey(organization, key, authorizationKey, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/virtual/cards/${key}/authorizations/${authorizationKey}`, {
      ...options,
       method: 'PUT',
    });
  }

}
