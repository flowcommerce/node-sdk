import Displays from './displays';
import Functions from './functions';
import Views from './views';

export default class ViewClient {
  constructor(host, auth, headers) {
    this.displays = new Displays(host, auth, headers);
    this.functions = new Functions(host, auth, headers);
    this.views = new Views(host, auth, headers);
  }
}
