var http = require("http")
var Url = require("url")

http.createServer(function(req,res){
    var path = req.url;
    var params = parseUrl(Url.parse(path).query);
    var data = {name:"swl", age:20};
    var script = params.func+"("+JSON.stringify(data)+")";
    console.log(typeof(script));
    res.write(script);
    res.end();
}).listen(3000)

//解析url
function parseUrl(url){
    var obj = {};
    var urls = url.split("&");
    for(var key in urls){
        var keyVal = urls[key].split("=");
        obj[keyVal[0]] = keyVal[1];
    }
    return obj;
}
