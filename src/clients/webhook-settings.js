import Client from './client';

export default class WebhookSettings extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getChannelAndWebhookAndSettingsByChannel(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/webhook/settings`, options);
  }

  putChannelAndWebhookAndSettingsByChannel(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/webhook/settings`, {
      ...options,
       method: 'PUT',
    });
  }

  getWebhookAndSettingsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/webhook/settings`, options);
  }

  putWebhookAndSettingsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/webhook/settings`, {
      ...options,
       method: 'PUT',
    });
  }

}
