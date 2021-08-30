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
=fredDATA("GDP",0)
```

![grafik](https://user-images.githubusercontent.com/66874303/131311079-65da4d12-d301-4137-91f4-f26cdce14242.png)

3.2. Get all historical values ([Unemployment Rate, Series-ID = UNRATE](https://fred.stlouisfed.org/series/UNRATE)):

```
=fredDATA("UNRATE",1)
```

![grafik](https://user-images.githubusercontent.com/66874303/131316572-77767918-cd47-4572-88b4-c37e3c35e2c8.png)

## 4. Use Case (["Buffett-Indicator"](https://www.investopedia.com/terms/m/marketcapgdp.asp) - Stock Market Capitalization-to-GDP Ratio)

```
=query(fredDATA("WILL5000PR"),"select Col2 offset 1",0)/QUERY(fredDATA("GDP"),"select Col2 offset 1",0)
```


