import Client from './client';

export default class RatecardEstimates extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ratecard_estimates`, {
      ...options,
       method: 'POST',
    });
  }

  postSummaries(organization, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ratecard_estimates/summaries`, {
      ...options,
       method: 'POST',
    });
  }

}
