# [API](README.md).regions - Flow Commerce API - Node SDK Documentation

A region represents a geographic area of the world. Regions can be countries, continents or other political areas (like the Eurozone).

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const regions = client().regions;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| q | string | Free text search on name for a single matching region. Case insensitive |

##`getById(id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


