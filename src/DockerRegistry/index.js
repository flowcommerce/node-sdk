import DockerRepositories from './docker-repositories';
import Tags from './tags';
import V2Tags from './v2-tags';

export default class DockerRegistryClient {
  constructor(host, auth, headers) {
    this.docker_repositories = new DockerRepositories(host, auth, headers);
    this.tags = new Tags(host, auth, headers);
    this.v2_tags = new V2Tags(host, auth, headers);
  }
}
