//配置mysql包
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'newssql'
});
// 下面这行代码 在connection.query()时会自动开启连接
// 所以 可以省略不写
// connection.connect();
module.exports = connection;