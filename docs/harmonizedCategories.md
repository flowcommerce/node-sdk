# [API](README.md).harmonizedCategories - Flow Commerce API - Node SDK Documentation

Categories optimized for harmonization

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const harmonizedCategories = client().harmonizedCategories;
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
| parent_id | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |

