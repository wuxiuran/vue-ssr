var express = require('express')
var Vue = require('vue')
var renderer = require('vue-server-renderer').createRenderer()
var app = express()
var port = process.env.PORT || 8081;

// app.set('view engine', 'jade')
app.listen(port)

app.get('/heiheihei', function (req, res) {
    var vm = new Vue({
      data: {
        url: req.url
      },
      template: '<div>访问的URL是：{{ url }}</div>'
    })

    renderer.renderToString(vm, function (err, html) {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }

      res.end('<!DOCTYPE html>'+
          '<html lang="en">'+
            '<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Hello</title></head>'+
            '<body>'+ html +'</body>'+
            '</html>')
    })
});

console.log('Server started on prot ' + port)

































