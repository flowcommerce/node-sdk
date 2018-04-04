# [API](README.md).itemQuerySuggestions - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const itemQuerySuggestions = client().itemQuerySuggestions;
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
| q | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |

