import Client from './client';

export default class ChannelDefaultBankAccounts extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/default/bank/accounts`, options);
  }

  put(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/default/bank/accounts`, {
      ...options,
       method: 'PUT',
    });
  }

  delete(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/default/bank/accounts`, {
      ...options,
       method: 'DELETE',
    });
  }

}
