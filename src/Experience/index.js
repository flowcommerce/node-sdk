import Displays from './displays';
import Experiences from './experiences';
import Functions from './functions';

export default class ExperienceClient {
  constructor(host, auth, headers) {
    this.displays = new Displays(host, auth, headers);
    this.experiences = new Experiences(host, auth, headers);
    this.functions = new Functions(host, auth, headers);
  }
}
