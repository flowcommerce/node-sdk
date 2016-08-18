# [API](README.md).services - Flow Commerce API - Node SDK Documentation

Specific service rendered by the carrier (fedex ground saturday, ups overnight weekend, etc)

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const services = client().services;
```

## Operations

##`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getById(id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


