Weather = WinJS.Class.define(function () {
    console.log("weather_isisisisis");
}, {
    getWeather: function () {
        var coordinate = new Coordinate();
        var center = coordinate.coordinate.lng + "," + coordinate.coordinate.lat;
        console.log(center);
        var _weather = getWeather(center);
        this.weather = _weather;

    },
    changeCity: function (city) {
        console.log('change', city);
        var _weather = getWeather(city);
        this.weather = _weather;
    }
});

// weather api
//http://api.36wu.com/Weather/GetMoreWeatherByLocation?lat=22.696438927913533&lng=114.22268673807241
//http://api.36wu.com//Weather/GetMoreWeather?district=%E5%8C%97%E4%BA%AC
// http://api.map.baidu.com/telematics/v3/weather?location=114.22268673807241,22.696438927913533&output=json&ak=yyvKdot9D7eZZvKsYliWchrg
function getWeather(loc) {
    var r;
    console.log("LOC",loc)
    $.ajax({
        url: " http://api.map.baidu.com/telematics/v3/weather?location=" + loc + "&output=json&ak=yyvKdot9D7eZZvKsYliWchrg",
        type: "get",
        dataType: "JSON",
        async: true,
        success: function (result) {
            console.log('r', result);
            r = result.results[0];
        }
    });
    return r;
}