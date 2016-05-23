import Contents from './contents';
import Hooks from './hooks';
import Refs from './refs';
import Repositories from './repositories';
import Tags from './tags';
import Users from './users';
import UserEmails from './user-emails';

export default class GithubClient {
  constructor(host, auth, headers) {
    this.contents = new Contents(host, auth, headers);
    this.hooks = new Hooks(host, auth, headers);
    this.refs = new Refs(host, auth, headers);
    this.repositories = new Repositories(host, auth, headers);
    this.tags = new Tags(host, auth, headers);
    this.users = new Users(host, auth, headers);
    this.user_emails = new UserEmails(host, auth, headers);
  }
}
