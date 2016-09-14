# [API](README.md).harmonizedLandedCosts - Flow Commerce API - Node SDK Documentation

Summary of landed cost data (taxes and duties) for 1 or more items going to a single destination country. Records are unique based on (item.number, country of origin).

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const harmonizedLandedCosts = client().harmonizedLandedCosts;
```

## Operations

##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


