# Custom Function (Google Sheets) to Import FRED-Economical-Data

FRED-Database: https://fred.stlouisfed.org/

## 1. What's FRED®?
See https://fred.stlouisfed.org/docs/api/fred/fred.html

## 1. Setup
### 1.1. Create a custom function in Google Sheets
See https://developers.google.com/apps-script/guides/sheets/functions

### 1.2. Request an API-Key
See https://fred.stlouisfed.org/docs/api/fred/#API

### 1.3. Modify the function to use your API-Key for requests
Change the variable `api_key` to your API-Key (32 character lower-cased alpha-numeric string)

```javascript
var api_key = 'abcdefghijklmnopqrstuvwxyz123456';
```
