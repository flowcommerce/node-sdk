import Client from './client';

export default class Projects extends Client {
  constructor(host, auth, headers) {
    super({
      serviceName: 'delta',
    });

    this.host = host;
    this.auth = auth;
    this.headers = headers;
  }

  get(options) {
    return this.makeRequest(`${this.host}/projects`, options);
  }

  getById(id, options) {
    return this.makeRequest(`${this.host}/projects/${id}`, options);
  }

  post(options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/projects`, options);
  }

  postEventsAndPursueDesiredStateById(id, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/projects/${id}/events/pursue_desired_state`, options);
  }

  putById(id, options) {
    Object.assign(options, { method: 'PUT' });
    return this.makeRequest(`${this.host}/projects/${id}`, options);
  }

  deleteById(id, options) {
    Object.assign(options, { method: 'DELETE' });
    return this.makeRequest(`${this.host}/projects/${id}`, options);
  }

  getBuildsAndStatesById(id, options) {
    return this.makeRequest(`${this.host}/projects/${id}/builds/states`, options);
  }

  getBuildsAndStatesAndDesiredByIdAndBuildName(id, buildName, options) {
    return this.makeRequest(`${this.host}/projects/${id}/builds/${buildName}/states/desired`, options);
  }

  postBuildsAndStatesAndDesiredByIdAndBuildName(id, buildName, options) {
    Object.assign(options, { method: 'POST' });
    return this.makeRequest(`${this.host}/projects/${id}/builds/${buildName}/states/desired`, options);
  }

  getBuildsAndStatesAndLastByIdAndBuildName(id, buildName, options) {
    return this.makeRequest(`${this.host}/projects/${id}/builds/${buildName}/states/last`, options);
  }

}
