# [API](README.md).locales - Flow Commerce API - Node SDK Documentation

Locales defines standard conventions for presentation of content. See https://api.flow.io/reference/locales

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const locales = client().locales;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search on name for a single matching locale. Case insensitive |

##`getById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


