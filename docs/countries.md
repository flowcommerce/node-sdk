# [API](README.md).countries - Flow Commerce API - Node SDK Documentation

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const countries = client().countries;
```

## Operations

##`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search for a single matching country. Can be the 2 or 3 character code or the name of the country. Case insensitive |

