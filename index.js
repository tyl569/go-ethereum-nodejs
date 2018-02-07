const express = require('express');
var app = express();
var bodyParse = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser()) ;
app.use(bodyParse.urlencoded({extended:false})) ;
var index = require('./routes/index');
var account = require('./routes/account');
var transfer = require('./routes/transfer');

app.use("/index", index);
app.use("/account", account);
app.use("/transfer", transfer);

// 监听3000端口
var server=app.listen(3000);
module.exports = app;