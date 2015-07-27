seajs.config({
    base: "/js/biz",
    paths: {
        "biz": "/js/biz",     //Biz逻辑处理集
        "tools": "/js/tools", //Tools工具集
        "class": "/js/class", //Class类文件夹
        "lib": "/js/lib"
    },
    alias: {
        "jquery": "lib/jquery1.11"
    }
});
// 工具包的引用
seajs.use('jquery');
//var $body = $('head');

// 自定义工具类引用
seajs.use('tools/getcity');

//Class引用
seajs.use('class/news');
seajs.use('class/weather');
seajs.use('class/coordinate');