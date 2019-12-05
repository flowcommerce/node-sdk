import Client from './client';

export default class RatecardRates extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === 'string') {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = 'API';

    super(options);
  }

  get(organization, ratecardId, laneId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ratecards/${encodeURIComponent(ratecardId)}/lanes/${encodeURIComponent(laneId)}/rates`, options);
  }

  post(organization, ratecardId, laneId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ratecards/${encodeURIComponent(ratecardId)}/lanes/${encodeURIComponent(laneId)}/rates`, {
      ...options,
       method: 'POST',
    });
  }

  getVersions(organization, ratecardId, laneId, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ratecards/${encodeURIComponent(ratecardId)}/lanes/${encodeURIComponent(laneId)}/rates/versions`, options);
  }

  getById(organization, ratecardId, laneId, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ratecards/${encodeURIComponent(ratecardId)}/lanes/${encodeURIComponent(laneId)}/rates/${encodeURIComponent(id)}`, options);
  }

  putById(organization, ratecardId, laneId, id, options = {}) {
    return this.makeRequest(`${this.host}/${encodeURIComponent(organization)}/ratecards/${encodeURIComponent(ratecardId)}/lanes/${encodeURIComponent(laneId)}/rates/${encodeURIComponent(id)}`, {
      ...options,
       method: 'PUT',
    });
  }

}
