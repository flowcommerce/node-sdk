# [API](README.md).duties - Flow Commerce API - Node SDK Documentation

Represents a simple model of duties that apply to a given item / trade lane.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const duties = client().duties;
```

## Operations

##`get(organization, origin, options)`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| origin | string | The ISO 3 character code for country of origin |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| number | string |  |
| address | string |  |
| ip | string |  |
| latitude | string |  |
| longitude | string |  |

