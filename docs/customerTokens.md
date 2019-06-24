# [API](README.md).customerTokens - Flow Commerce API - Node SDK Documentation

Represents a mapping between a customer number and a token

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const customerTokens = client().customerTokens;
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
| token | string |  |
| customer_number | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`postLatestByCustomerNumber(organization, customerNumber, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| customer_number | string |  |


##`getById(organization, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| id | string | Filter by one or more IDs of this resource |


##`deleteById(organization, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| id | string | Filter by one or more IDs of this resource |


