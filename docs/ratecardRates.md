# [API](README.md).ratecardRates - Flow Commerce API - Node SDK Documentation

Specific line item in a ratecard lane with information on a weight threshold and corresponding amount to charge

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const ratecardRates = client().ratecardRates;
```

## Operations

##`get(organization, ratecardId, laneId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |
| lane_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| weight | [double] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, ratecardId, laneId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |
| lane_id | string |  |


##`getById(organization, ratecardId, laneId, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |
| lane_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`putById(organization, ratecardId, laneId, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |
| lane_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`getVersions(organization, ratecardId, laneId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| ratecard_id | string |  |
| lane_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

