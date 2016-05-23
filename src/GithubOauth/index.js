import AccessTokens from './access-tokens';

export default class GithubOauthClient {
  constructor(host, auth, headers) {
    this.access_tokens = new AccessTokens(host, auth, headers);
  }
}
