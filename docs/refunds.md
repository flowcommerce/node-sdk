# [API](README.md).refunds - Flow Commerce API - Node SDK Documentation

Refunds are used to issue refunds against a prior capture.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const refunds = client().refunds;
```

## Operations

##`get(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| reference | [string] |  |
| authorization_id | string |  |
| authorization_reference | string |  |
| capture_id | string |  |
| capture_reference | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getById(organization, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| id | string | Filter by one or more IDs of this resource |


##`getVersions(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| refund_id | [string] | Filter to refunds with any one of these ids. |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |
