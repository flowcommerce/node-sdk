# [API](README.md).abandonedOrderSettings - Flow Commerce API - Node SDK Documentation



## Usage

```JavaScript
import client from '@flowio/node-sdk';

const abandonedOrderSettings = client().abandonedOrderSettings;
```

## Operations

##`get(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| delay_time | long | Interval of time to wait to publish an email event after the order is abandoned. |
| delay_unit | unit_of_time | Time unit for delay. Can be minute, hour, day, week, month or year. |
| frequency_time | long | Frequency of how often a customer can receive an email. For instance, if the frequency is 24 hours, no more than one email will be sent in a 24 hour window. |
| frequency_unit | unit_of_time | Time unit for frequency. Can be minute, hour, day, week, month or year. |
| status | abandoned_order_setting_status | The status of the setting. Can be either active or inactive. |

##`put(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| delay_time | long | Interval of time to wait to publish an email event after the order is abandoned. |
| delay_unit | unit_of_time | Time unit for delay. Can be minute, hour, day, week, month or year. |
| frequency_time | long | Frequency of how often a customer can receive an email. For instance, if the frequency is 24 hours, no more than one email will be sent in a 24 hour window. |
| frequency_unit | unit_of_time | Time unit for frequency. Can be minute, hour, day, week, month or year. |
| status | abandoned_order_setting_status | The status of the setting. Can be either active or inactive. |

##`delete(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


