# [API](README.md).ratecardEstimates - Flow Commerce API - Node SDK Documentation

Here for backards compatibility with estimates we store in databases

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const ratecardEstimates = client().ratecardEstimates;
```

## Operations

##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| target_datetime | date-time-iso8601 | The datetime on which to base an estimate |

##`postSummaries(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


