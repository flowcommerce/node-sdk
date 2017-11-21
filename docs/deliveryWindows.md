# [API](README.md).deliveryWindows - Flow Commerce API - Node SDK Documentation

Flow&#x27;s estimate of when a shipment for this delivery will actually arrive at the final destination, taking into account a shipment estimate, center schedules, and carrier transit windows.

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const deliveryWindows = client().deliveryWindows;
```

## Operations

##`getSummary(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| strategy | strategy |  |
| center | string |  |
| origin | string |  |
| destination | string |  |
| ip | string |  |
| latitude | string |  |
| longitude | string |  |
| service | string |  |

