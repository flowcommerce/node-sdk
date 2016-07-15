# node-sdk

Node SDK for the Flow Commerce API.

# Documentation / API

The official documentation can be found at [docs.flow.io](https://docs.flow.io).
This will cover in detail all of the resources of the api.

See [API Resources](docs/README.md) for the documentation of the Node SDK API
and its functions.

## Getting Started

### Authentication

Visit [console.flow.io](https://console.flow.io) to create an account and
generate an API key.

### Making an authenticated request

Most requests to `api.flow.io` require _Basic Authentication_. Here is how to
make and authenticated request with JavaScript.

```JavaScript
import client from '@flowio/node-sdk';

const api = client();
const token = process.env.FLOW_IO_API_TOKEN;

api.organizations.get({
  headers: {
    Authentication: `Basic ${token}`,
  },
}).then((response) => {
  switch(response.status) {
    case 200:
      response.result.map((organization) =>
        console.log(`Found Organization: ${organization.name}`))
    case 401:
      throw new Error('Was not authorized to get organizations!');
    default:
      throw new Error(`Response code[${response.status}] not handled!`);
  }
});
```

### Anatomy

Let's break down the example above!

```JavaScript
const api = client();
const token = process.env.FLOW_IO_API_TOKEN;
```

You need two things to make a request to the api. An instance of the client
and an authorization token. We recommend _not_ storing your token in code, but
referencing it via an environment variable.

```JavaScript
api.organizations.get({...})
```

Next the syntax for the client is `client.{resource}.{method}`. You can find a
list of resources and their methods [here](docs/README.me). The parameters for
each resource method can vary, so be sure to pay attention to the docs to see
what is required.

```JavaScript
  headers: {
    Authentication: `Basic ${token}`,
  },
```

Whatever the parameters for a method, it always ends with an options parameter.
`fetch` is used under the hood, so anything you add to the `options` object will
be forwarded to the underlying [node-fetch](https://github.com/bitinn/node-fetch)
implementation. The following are the most common options:

| option  | Type   | Description |
| :------ | :----- | :---------- |
| params  | Object | An object of `paramName`:`paramValue` used at query parameters in the request.
| body    | string | A JSON string representation of the body, e.g, `JSON.stringify(model_form)`.
| headers | Object | Used for Basic Authentication and any custom headers that may be required as documented for each method of the API.

```JavaScript
}).then((response) => {
  switch(response.status) {
    case 200:
      response.result.map((organization) =>
        console.log(`Found Organization: ${organization.name}`))
    case 401:
      throw new Error('Was not authorized to get organizations!');
    default:
      throw new Error(`Response code[${response.status}] not handled!`);
  }
});
```

Each method of the SDK returns a `Promise` of the response. The response will
contain two properties: `status` and `result`. `response.status` is the HTTP
status code of the response. `response.result` is the data returned by the api.
While switch statements are usually frowned upon, at Flow we feel it is critical
to handle every known response from an API to prevent unexpected behavior. We
also do not want to make assumptions on how you may wish to handle those
responses. The pattern we recommend adopting is to explicitly handle each
response code that is documented in the API.


### Getting Help

We are in the process of setting up a slack channel. In the interim,
please feel free to open an issue on this github repository.

# Development / Release

See [DEVELOPER](DEVELOPER.md).
