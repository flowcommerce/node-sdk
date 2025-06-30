# [API](README.md).tradeAgreements - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const tradeAgreements = client().tradeAgreements;
```

## Operations

##`get(options = {})`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| key | string |  |
| name | trade_agreement_name |  |
| origin | string |  |
| destinations | [string] |  |
| ship_from | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(options = {})`



##`getByKey(key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| key | string |  |


##`putByKey(key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| key | string |  |


##`deleteByKey(key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| key | string |  |


