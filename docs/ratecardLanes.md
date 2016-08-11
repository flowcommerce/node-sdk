# [API](README.md).ratecardLanes - Flow Commerce API - Node SDK Documentation

Describe list of rates applicable for a lane on the ratecard - defined by origin and destination zone

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const ratecardLanes = client().ratecardLanes;
```

## Operations

##`get(organization, ratecardId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| origin | string |  |
| destination | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, ratecardId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |


##`getById(organization, ratecardId, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`putById(organization, ratecardId, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`getVersions(organization, ratecardId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

