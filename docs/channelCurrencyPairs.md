# [API](README.md).channelCurrencyPairs - Flow Commerce API - Node SDK Documentation

Represents an organization-specific currency conversion rate at a point in time.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const channelCurrencyPairs = client().channelCurrencyPairs;
```

## Operations

##`get(channelId, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| channel_id | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

