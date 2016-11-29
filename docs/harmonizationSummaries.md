# [API](README.md).harmonizationSummaries - Flow Commerce API - Node SDK Documentation

Summary of Origin/Destination pairs and their associated HS10 code information

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const harmonizationSummaries = client().harmonizationSummaries;
```

## Operations

##`get(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| origin | string |  |
| destination | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

