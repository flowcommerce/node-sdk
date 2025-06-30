import Client from './client';

export default class ChannelBankAccounts extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/bank/accounts`, options);
  }

  getByKey(channel, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/bank/accounts/${encodeURIComponent(key)}`, options);
  }

  putByKey(channel, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/bank/accounts/${encodeURIComponent(key)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteByKey(channel, key, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/bank/accounts/${encodeURIComponent(key)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
