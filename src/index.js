import Client from './clients';

export default function CreateClient(opts) {
  let options = {
    host: 'https://api.flow.io',
  };

  if (typeof opts === 'string') {
    options.auth = opts;
  } else {
    options = Object.assign({}, options, opts);
  }


  return new Client(options);
}
