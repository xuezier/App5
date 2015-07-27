var CityList = WinJS.Class.define(function () {
    citys = getlist();
    this.list = citys;
    console.log(this.list);
});
function getlist() {
    var r = {};
    r.namelist = [];
    r.pinyinlist = [];
    r.city = {};
    $.ajax({
        url: "/json/city.json",
        type: "get",
        dataType: "JSON",
        async: false,
        success: function (result) {
            console.log("listresult", result);
            result.forEach(function (item) {
                r.namelist.push(item.name);
                r.pinyinlist.push(item.pinyin);
                r.city[item.pinyin] = item.name;
            });
            console.log("pinyin", r.namelist);
            console.log("pinyin", r.city);
            //r = result;
        },
        error: function (e) {
            console.log("e,", e)
        }
    });
    return r;
}