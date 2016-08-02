# [API](README.md).tierRules - Flow Commerce API - Node SDK Documentation

System to filter incoming quote for a shipment request based on a query and output corresponding outcomes.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const tierRules = client().tierRules;
```

## Operations

##`get(organization, tierId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| tier_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, tierId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| tier_id | string |  |


##`getById(organization, tierId, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| tier_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`putById(organization, tierId, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| tier_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`deleteById(organization, tierId, id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| tier_id | string |  |
| id | string | Filter by one or more IDs of this resource |


##`getVersions(organization, tierId, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| tier_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| tier_rule | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

