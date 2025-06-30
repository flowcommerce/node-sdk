import Client from './client';

export default class OrganizationOnboardingStates extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  putChannelAndOrganizationAndActivateByChannelAndOrganization(channel, organization, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/organization/${encodeURIComponent(organization)}/activate`, {
      ...options,
       method: 'PUT',
    });
  }

  putChannelAndOrganizationAndDeactivateByChannelAndOrganization(channel, organization, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/organization/${encodeURIComponent(organization)}/deactivate`, {
      ...options,
       method: 'PUT',
    });
  }

  putChannelAndOrganizationAndRejectByChannelAndOrganization(channel, organization, options = {}) {
    return this.makeRequest(`${this.host}/channel/${encodeURIComponent(channel)}/organization/${encodeURIComponent(organization)}/reject`, {
      ...options,
       method: 'PUT',
    });
  }

  getOnboardingAndStateByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/onboarding/state`, options);
  }

  putOnboardingAndStateAndActivationByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/onboarding/state/activation`, {
      ...options,
       method: 'PUT',
    });
  }

  putOnboardingAndStateAndDeactivationByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/onboarding/state/deactivation`, {
      ...options,
       method: 'PUT',
    });
  }

  putOnboardingAndStateAndRejectByOrganization(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/onboarding/state/reject`, {
      ...options,
       method: 'PUT',
    });
  }

}
