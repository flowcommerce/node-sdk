import Views from './views';
import Displays from './displays';

export default class ViewsClient {
  constructor(host, auth, headers) {
    this.views = new Views(host, auth, headers);
    this.displays = new Displays(host, auth, headers);
  }
}
