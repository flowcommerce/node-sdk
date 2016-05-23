import Articles from './articles';
import Healthchecks from './healthchecks';

export default class ArticleClient {
  constructor(host, auth, headers) {
    this.articles = new Articles(host, auth, headers);
    this.healthchecks = new Healthchecks(host, auth, headers);
  }
}
