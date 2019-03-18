# [API](README.md).experiences - Flow Commerce API - Node SDK Documentation

Experiences define a local experience for a given geographic region

## Usage

```JavaScript
import client from '@flowio/node-sdk';

const experiences = client().experiences;
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
| q | string |  |
| id | [string] | Filter by one or more IDs of this resource |
| key | [string] |  |
| name | string |  |
| region | string |  |
| currency | string |  |
| subcatalog | string |  |
| ip | string | If specified, we will geolocate the user by this IP address, and if successful, select the experience matching the country of the IP address. |
| status | experience_status |  |
| shipping_configuration_key | string |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`post(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getConversionsByBaseAndAmount(organization, base, amount, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| base | string | The currency of the provided amount, which will be converted to the experience currency, unless a value is specified for the &#x60;currency&#x60; parameter. |
| amount | string | The amount in the base currency to be converted. |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| experience | string | If specified, we will render the items in the context of the experience with this key. |
| country | string |  |
| ip | string |  |
| currency | string | If specified, the provided base amount will be converted to and formatted in this currency. |

##`getItems(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| number | [string] |  |
| status | [subcatalog_item_status] | Filter to items based on their status within this subcatalog |
| experience | string | If specified, we will render the items in the context of the experience with this key. |
| country | string | If specified, we will select the experience matching this country. ISO 3166 3 currency code as defined in https://api.flow.io/reference/countries |
| ip | string | If specified, we will geolocate the user by this IP address, and if successful, select the experience matching the country of the IP address. |
| currency | string | Iso 4217 3 currency code as defined in https://api.flow.io/reference/currencies If specified, translate the pricing to this currency. Translation occurs using the current spot rate for this currency from the base currency in the experience. |
| language | string | ISO 639 2 language code as defined in https://api.flow.io/reference/languages If specified, translate content to this language (where available) |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getItemsByNumber(organization, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| number | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| experience | string | If specified, we will render the items in the context of the experience with this key. |
| country | string |  |
| ip | string |  |
| currency | string |  |
| language | string | ISO 639 2 language code as defined in https://api.flow.io/reference/languages |

##`postQueryAndBuilders(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |


##`getVersions(organization, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| key | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getCurrencyAndFormatsByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |


##`putCurrencyAndFormatsByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |


##`getLogisticsAndSummaryByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| country | string | If not specified, we will use the experience default country. ISO 3166 3 country code as defined in https://api.flow.io/reference/countries |
| currency | string | If not specified, we will use the experience default currency. ISO 3166 3 currency code as defined in https://api.flow.io/reference/currencies |
| number | string | Specific item number for which to generate a summary |

##`getMarginsByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`postMarginsByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |


##`getMarginsAndVersionsByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`getMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |
| key | string |  |


##`putMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |
| key | string |  |


##`deleteMarginsByExperienceKeyAndKey(organization, experienceKey, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |
| key | string |  |


##`getPaymentMethodTypesByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |

##`getPaymentAndMethodAndRulesByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| payment_method_type | [payment_method_type] |  |
| tags | [string] |  |
| amount | string | If specified, we will ensure that any available installment programs are adjusted to be &lt;&#x3D; this amount. If specified, must also specify currency |
| currency | string | Required if amount is specified |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`putPaymentAndMethodAndRulesByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |


##`getPriceAndBooksByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |

### Query Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| id | [string] | Filter by one or more IDs of this resource |
| price_book_key | [string] |  |
| limit | long | The maximum number of results to return |
| offset | long | The number of results to skip before returning results |
| sort | string |  |

##`postPriceAndBooksByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |


##`putPriceAndBooksByExperienceKey(organization, experienceKey, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |


##`getPriceAndBooksByExperienceKeyAndKey(organization, experienceKey, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |
| key | string |  |


##`deletePriceAndBooksByExperienceKeyAndKey(organization, experienceKey, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| experience_key | string |  |
| key | string |  |


##`getByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


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


##`postCloneByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`getItemsAndPriceByKeyAndNumber(organization, key, number, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |
| number | string |  |


##`getPricingByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`putPricingByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`getPromotionsAndAvailableByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


##`putStatusByKey(organization, key, options = {})`

### Function Parameters

| Name  | Type | Description |
| ---- | ---- | ---- |
| organization | string | Refers to your organization&#x27;s account identifier |
| key | string |  |


