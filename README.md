# Custom Function (Google Sheets) to Import FRED® Economical Data
This product uses the FRED® API but is not endorsed or certified by the Federal Reserve Bank of St. Louis.

## 1. What's FRED®?
https://fred.stlouisfed.org/docs/api/fred/fred.html

## 2. Setup
### 1.1. Create a custom function in Google Sheets
https://developers.google.com/apps-script/guides/sheets/functions

### 2.2. Request an API-Key
https://fred.stlouisfed.org/docs/api/fred/#API

### 2.3. Modify the function to use your API-Key for requests
Change the variable `api_key` to your API-Key (32 character lower-cased alpha-numeric string)

```javascript
var api_key = 'abcdefghijklmnopqrstuvwxyz123456';
```

## 3. Examples

3.1. Get the newest value ([Gross Domestic Product, Series-ID = GDP](https://fred.stlouisfed.org/series/GDP)):

```
=fredDATA("GDP";0)
```

![grafik](https://user-images.githubusercontent.com/66874303/131307299-9983aae8-a4ff-4341-88f7-2f41791dd7bb.png)

3.2. Get all historical values ([Unemployment Rate, Series-ID = UNRATE](https://fred.stlouisfed.org/series/UNRATE)):

```
=fredDATA("UNRATE";1)
```

![grafik](https://user-images.githubusercontent.com/66874303/131308771-c8d156be-fe4f-4062-a9d8-e711fd514104.png)


