# [API](README.md).taxRegistrations - Flow Commerce API - Node SDK Documentation

Result of looking up a specific tax registration number. Indicates validity of a number for a specific country and (if valid) the associated person/company.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const taxRegistrations = client().taxRegistrations;
```

## Operations

##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getDetails(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| order_number | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |

##`putByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`deleteByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


