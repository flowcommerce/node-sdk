import Client from './client';

export default class MerchantApplications extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  getChannelAndMerchantAndApplicationsByChannelId(channelId, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/merchant/applications`, options);
  }

  getChannelAndMerchantAndApplicationsAndSummaryByChannelId(channelId, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channelId)}/merchant/applications/summary`, options);
  }

  getMerchantAndApplicationsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/merchant/applications`, options);
  }

  postMerchantAndApplicationsByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/merchant/applications`, {
      ...options,
       method: 'POST',
    });
  }

  getMerchantAndApplicationsAndLatestByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/merchant/applications/latest`, options);
  }

  getMerchantAndApplicationsAndSummaryByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/merchant/applications/summary`, options);
  }

  getMerchantAndApplicationsByOrganizationAndId(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/merchant/applications/${encodeURIComponent(id)}`, options);
  }

  putMerchantAndApplicationsByOrganizationAndId(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/merchant/applications/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

}
