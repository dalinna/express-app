
var express = require('express');
// search = require('./search');
var app = express();
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('views options',{layout: false});
app.get('/',function(req,res){
    res.render('index');
});
app.listen(3000)