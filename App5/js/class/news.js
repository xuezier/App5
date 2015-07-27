//新闻对象
var newsModule = WinJS.Class.define(function (title, text) {
    this.title = title;
    this.text = text;
    this.timeOut = null;
}, {
    factory: function (array) {
        var newsDepot = [];
        for (var i = 0; i < array.length; i++) {
            var newsItem = new newsModule(array[i].title, array[i].text);
            newsDepot.push(newsItem);
        };
        this.newsDepot = newsDepot;
        return newsDepot;
    }
});


//新闻工厂
function newsFactory(array) {
    var newsDepot = [];
    for (var i = 0; i < array.length; i++) {
        var newsItem = new newsModule(array[i].title, array[i].text);
        newsDepot.push(newsItem);
    };
    return newsDepot;
};