# [API](README.md).loyaltyPrograms - Flow Commerce API - Node SDK Documentation

Provides information regarding loyalty program associated with an order

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const loyaltyPrograms = client().loyaltyPrograms;
```

## Operations

##`get(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`post(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |


##`deleteById(organization, number, id, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |
| id | string | Filter by one or more IDs of this resource |


