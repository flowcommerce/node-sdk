import Client from './client';

export default class Webhooks extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getChannelAndWebhooksByChannel(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/webhooks`, options);
  }

  postChannelAndWebhooksByChannel(channel, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/webhooks`, {
      ...options,
       method: 'POST',
    });
  }

  getChannelAndWebhooksByChannelAndId(channel, id, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/webhooks/${encodeURIComponent(id)}`, options);
  }

  putChannelAndWebhooksByChannelAndId(channel, id, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/webhooks/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteChannelAndWebhooksByChannelAndId(channel, id, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/webhooks/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

  getWebhooksByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/webhooks`, options);
  }

  postWebhooksByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/webhooks`, {
      ...options,
       method: 'POST',
    });
  }

  getWebhooksByOrganizationAndId(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/webhooks/${encodeURIComponent(id)}`, options);
  }

  putWebhooksByOrganizationAndId(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/webhooks/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

  deleteWebhooksByOrganizationAndId(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/webhooks/${encodeURIComponent(id)}`, {
      ...options,
       method: 'DELETE',
    });
  }

}
