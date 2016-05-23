import Classifications from './classifications';

export default class ClassificationClient {
  constructor(host, auth, headers) {
    this.classifications = new Classifications(host, auth, headers);
  }
}
