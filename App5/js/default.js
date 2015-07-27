// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=329104
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO:  此应用程序刚刚启动。在此处初始化
                //您的应用程序。
                //首次加载天气
                _initWeather();

                //获取城市列表
                var cityList = new CityList();

                var statusEl = document.getElementById("status");
                var suggestionList = [];
                var suggestionList = cityList.list.namelist;

                function suggestionsRequestedHandler(eventObject) {
                    var queryText = eventObject.detail.queryText,
                    query = queryText.toLowerCase(),
                    suggestionCollection = eventObject.detail.searchSuggestionCollection;
                    if (queryText.length > 0) {
                        for (var i = 0, len = suggestionList.length; i < len; i++) {
                            if (suggestionList[i].substr(0, query.length).toLowerCase() === query) {
                                suggestionCollection.appendQuerySuggestion(suggestionList[i]);
                            }
                        }
                    }
                }

                function querySubmittedHandler(eventObject) {
                    var queryText = eventObject.detail.queryText;
                    console.log(queryText);
                    var dataList = [];
                    var weather = new WinJS.Binding.List(dataList);
                    var cityList = [];
                    var city = new WinJS.Binding.List(cityList);
                    var lifeList = [];
                    var life = new WinJS.Binding.List(lifeList);
                    WinJS.Namespace.define("Sample", {
                        City: city,
                        Weather: weather,
                        Life: life,
                        CityName: ''
                    });
                    _initWeather(queryText);
                }

                WinJS.Namespace.define("Select", {
                    suggestionsRequestedHandler: WinJS.UI.eventHandler(suggestionsRequestedHandler),
                    querySubmittedHandler: WinJS.UI.eventHandler(querySubmittedHandler)
                });


            } else {
                // TODO:  此应用程序已从挂起状态重新激活。
                // 在此处恢复应用程序状态。
            }
            args.setPromise(WinJS.UI.processAll().done(function () {
                var pivot = document.querySelector("#messageList").winControl;
                var navBar = document.querySelector("#createNavBar").winControl;
                var change = document.getElementById("Edit");
                change.addEventListener("click", function () {
                    if (pivot.selectedIndex != 2) {
                        pivot.selectedIndex = 2;
                    }
                }, false);
            }));
        }
    };


    app.oncheckpoint = function (args) {
        // TODO:  即将挂起此应用程序。在此处保存
        //需要在挂起中保留的任何状态。您可以使用
        // WinJS.Application.sessionState 对象，该对象将在
        //挂起中自动保存和恢复。如果您需要在
        //挂起应用程序之前完成异步操作，请调用
        // args.setPromise()。
    };

    app.start();
})();


var dataList = [];
var weather = new WinJS.Binding.List(dataList);
var cityList = [];
var city = new WinJS.Binding.List(cityList);
var lifeList = [];
var life = new WinJS.Binding.List(lifeList);
WinJS.Namespace.define("Sample", {
    City: city,
    Weather: weather,
    Life: life,
    CityName: ''
});
var _weather = new Weather();
function _initWeather(initCity) {
    //console.log(initCity);
    var data = [];
    var _citydata = {};
    //var _weather = new Weather();
    if (initCity) {
        console.log("ready2")
        _weather.changeCity(initCity);
    } else {
        console.log("ready1")
        _weather.getWeather();
    }
    console.log("weather", _weather.weather.weather_data);
    data = _weather.weather.weather_data;
    console.log("data", data);
    _citydata = {
        name: _weather.weather.currentCity,
        date: _weather.weather.weather_data[0].date,
        pm25: _weather.weather.pm25,
        dayPictureUrl: _weather.weather.weather_data[0].dayPictureUrl,
        nightPictureUrl: _weather.weather.weather_data[0].nightPictureUrl,
        weather: _weather.weather.weather_data[0].weather,
        temperature: _weather.weather.weather_data[0].temperature,
        wind: _weather.weather.weather_data[0].wind
    };
    for (var i = 1; i < data.length; i++) {
        Sample.Weather.push(data[i]);
    }
    _weather.weather.index.forEach(function (item) {
        Sample.Life.push(item);
    });
    console.log("lise", Sample.Life)
    Sample.City.push(_citydata);
    Sample.CityName = _weather.weather.currentCity;
}






