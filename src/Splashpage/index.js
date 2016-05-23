import Subscriptions from './subscriptions';

export default class SplashpageClient {
  constructor(host, auth, headers) {
    this.subscriptions = new Subscriptions(host, auth, headers);
  }
}
