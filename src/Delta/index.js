import AwsActors from './aws-actors';
import DashboardBuilds from './dashboard-builds';
import Events from './events';
import GithubUsers from './github-users';
import GithubWebhooks from './github-webhooks';
import Images from './images';
import Users from './users';
import Items from './items';
import Memberships from './memberships';
import Organizations from './organizations';
import Projects from './projects';
import Repositories from './repositories';
import Shas from './shas';
import Subscriptions from './subscriptions';
import Tags from './tags';
import Tokens from './tokens';

export default class DeltaClient {
  constructor(host, auth, headers) {
    this.aws_actors = new AwsActors(host, auth, headers);
    this.dashboard_builds = new DashboardBuilds(host, auth, headers);
    this.events = new Events(host, auth, headers);
    this.github_users = new GithubUsers(host, auth, headers);
    this.github_webhooks = new GithubWebhooks(host, auth, headers);
    this.images = new Images(host, auth, headers);
    this.users = new Users(host, auth, headers);
    this.items = new Items(host, auth, headers);
    this.memberships = new Memberships(host, auth, headers);
    this.organizations = new Organizations(host, auth, headers);
    this.projects = new Projects(host, auth, headers);
    this.repositories = new Repositories(host, auth, headers);
    this.shas = new Shas(host, auth, headers);
    this.subscriptions = new Subscriptions(host, auth, headers);
    this.tags = new Tags(host, auth, headers);
    this.tokens = new Tokens(host, auth, headers);
  }
}
