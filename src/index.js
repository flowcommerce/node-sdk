import Client from './clients';

export default function CreateClient(url = 'https://api.flow.io') {
  return new Client(url);
}
