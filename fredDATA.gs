/**
 * Returns FRED®-Data (Federal Reserve Economic Data) by Series-ID
 * 
 * @param {string} series_id
 * Example: "GDP" (Gross Domestic Product)
 * 
 * @param {string} parameter
 * 0 (default) = Current Value | 1 = All Values
 * 
 * @customfunction
 * @return an array
 */

function fredAPI(series_id, parameter) {

  var api_key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; //Change this variable to your API-Key

  var http_response = UrlFetchApp.fetch('https://api.stlouisfed.org/fred/series/observations?' + 'series_id=' + series_id + '&api_key=' + api_key + '&file_type=json');

  var api_data = JSON.parse(http_response.getContentText());

  if (parameter) {

    var observations_array = api_data.observations;
    var results_array = [['Date', series_id]];

    for (i = 0; i < observations_array.length; i++) {

      if (Number(api_data.observations[i]['value'])) {

        results_array.push([api_data.observations[i]['date'], Number(api_data.observations[i]['value'])]);

      };

    };

    return results_array;

  } else {

    var observations_array = api_data.observations;
    var results_array = [['Date', series_id]];

    if (Number(api_data.observations[observations_array.length - 1]['value'])) {

      results_array.push([api_data.observations[observations_array.length - 1]['date'], Number(api_data.observations[observations_array.length - 1]['value'])]);

    };

    return results_array;

  };

}
