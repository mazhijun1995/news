//1.导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const session = require('express-session');
//2.配置包
const app = express();
// 配置express-session包
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.engine('html',require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
//3.挂载路由
app.use(router);

//4.绑定端口
app.listen(12345,()=>{
    console.log('run----');
})