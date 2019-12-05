import Client from './client';

export default class ExperienceLogisticsSettings extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/settings/logistics`, options);
  }

  put(organization, experienceKey, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/experiences/${encodeURIComponent(experienceKey)}/settings/logistics`, {
      ...options,
       method: 'PUT',
    });
  }

}
