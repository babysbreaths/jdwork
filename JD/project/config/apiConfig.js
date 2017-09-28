var querystring = require("querystring")
var url = require("url")
var alldata = require("./dataConfig")
exports.data=function(){
    return[
        {
            route:'/index',
            handle:function(req,res,next){
                res.writeHead(200,{
                   "Content-type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*"
                })
                res.write(JSON.stringify(alldata))
                res.end("hello")
            }
        }
    ]
}
