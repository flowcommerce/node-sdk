# [API](README.md).provinces - Flow Commerce API - Node SDK Documentation

A subdivision/province/state within a country. These conform to the ISO 3166-2 standard for country subdivisions. See https://api.flow.io/reference/provinces

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const provinces = client().provinces;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search on name for a single matching region. Case insensitive |
| countries | [string] | ISO 3166 3-character country code. See https://api.flow.io/reference/countries |

##`getById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


