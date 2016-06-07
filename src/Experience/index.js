import Displays from './displays';
import Experiences from './experiences';

export default class ExperienceClient {
  constructor(host, auth, headers) {
    this.displays = new Displays(host, auth, headers);
    this.experiences = new Experiences(host, auth, headers);
  }
}
