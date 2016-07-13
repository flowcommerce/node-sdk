# [API](README.md).taxes - Flow Commerce API - Node SDK Documentation

Represents a simple model of taxes that apply to a given item / destination.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const taxes = client().taxes;
```

## Operations

##`get(organization, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| address | string |  |
| ip | string |  |
| latitude | string |  |
| longitude | string |  |

