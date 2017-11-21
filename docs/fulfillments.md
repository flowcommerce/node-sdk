# [API](README.md).fulfillments - Flow Commerce API - Node SDK Documentation

Used to track and manage the fulfillment of an order.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const fulfillments = client().fulfillments;
```

## Operations

##`get(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`putCancellations(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`putCompleteAndCancellations(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


