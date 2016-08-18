# [API](README.md).carriers - Flow Commerce API - Node SDK Documentation

Partner that actually take a shipment between places (ex: FedEx, DHL, SF Express)

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const carriers = client().carriers;
```

## Operations

##`get(options)`


### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getById(id, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | string | Filter by one or more IDs of this resource |


