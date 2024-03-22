/**
 * Returns FRED®-Data (Federal Reserve Economic Data) by Series-ID
 * 
 * @param {string} series_ids (comma-separated string)
 * Example: "GDP" (Gross Domestic Product)
 * 
 * @param {boolean} parameter
 * 0 (default) = Current Value | 1 = All Values
 *
 * @customfunction
 * @return an array or arrays
*/
function multiSeriesFred(ids, parameter){
  //an array where [0] stores dates and [1+] stores values
  var results_array = [];

  var series_ids = ids.split(',');

  for(var i=0; i < series_ids.length; i++){
    var id = series_ids[i];
    var newValues = fetchFredDATA(id, parameter);
    if(results_array.length==0){
      results_array=results_array.concat(newValues);
    } else {
      //equivalent dates
      if(results_array[0] == newValues[0]){
        results_array.push(newValues[1]);
      } else {
        for(var k=0; k < newValues[0].length; k++){
          var newValuesDate = newValues[0][k];
          if(!results_array[0].includes(newValuesDate)){
            //splice in the new date and value
            var index = 0;
            for(var l=0; l < results_array[0].length; l++){
              var oldDate = results_array[0][l];
              if(oldDate>newValuesDate) break;
              index++;
            }

            for(var m=0; m < results_array.length; m++){
              var series = results_array[m];
              results_array[m].splice(index,0,results_array.indexOf(series) == 0 ? newValuesDate : null);
            }

          }
        }
        var newSeriesIndex = results_array.length;
        results_array[newSeriesIndex] = [];

        for(var x=0; x<results_array[0].length; x++){
          results_array[newSeriesIndex][x] = newValues[1][newValues[0].indexOf(results_array[0][x])];
        }
      }
    }
  }
  var output_array = [];
  var first_row = ['Date'];
  var index = 0;
  for(var index=0; index < results_array[0].length; index++){
    var date = results_array[0][index];
    var row = []
    for(var p=0; p < results_array.length; p++){
      if(index == 0 && p!=results_array.length-1){
        first_row.push(series_ids[p]);
      }
      var column = results_array[p];
      row.push(column[index]);
    }
    output_array.push(row);
  }
  output_array.splice(0, 0, first_row);

  return output_array
}


/**
 * Returns FRED®-Data (Federal Reserve Economic Data) by Series-ID
 * 
 * @param {String} series_id
 * Example: "GDP" (Gross Domestic Product)
 * 
 * @param {boolean} parameter
 * 0 (default) = Current Value | 1 = All Values
 *
 * @return an array
 */

function fetchFredDATA(series_id, parameter) {
  var api_key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; //Change this variable to your API-Key


  var http_response = UrlFetchApp.fetch('https://api.stlouisfed.org/fred/series/observations?' + 'series_id=' + series_id + '&api_key=' + api_key + '&file_type=json');

  var api_data = JSON.parse(http_response.getContentText());

  if (parameter) {

    var observations_array = api_data.observations;
    // an array with two values: [0] is an array of dates and [1] is an array of values
    var results_array = [[], []]; 

    for (i = 0; i < observations_array.length; i++) {

      if (Number(api_data.observations[i]['value'])) {

        results_array[0].push(api_data.observations[i]['date']);
        results_array[1].push(Number(api_data.observations[i]['value']));
      };

    };

    return results_array;

  } else {

    var observations_array = api_data.observations;
    var results_array = [[], []]; 

    if (Number(api_data.observations[observations_array.length - 1]['value'])) {

      results_array[0].push(api_data.observations[observations_array.length - 1]['date']);
      results_array[1].push(Number(api_data.observations[observations_array.length - 1]['value']));

    };

    return results_array;

  };

}
