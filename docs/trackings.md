# [API](README.md).trackings - Flow Commerce API - Node SDK Documentation

Top level tracking information which contains labels. In cases where shipments are re-labeled, you will see multiple labels for each tracking allowing simple access to see where a shipment is - with which carrier and with the local tracking number

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const trackings = client().trackings;
```

## Operations

##`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| organization | string | Refers to your organization&#x27;s account identifier |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(options)`



##`getById(id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


##`getVersions(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| tracking_id | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

