//模型: 专门处理c_user.js中的数据模型

// 导入数据库配置的模块
const connection = require('../tools/db_config');
function checkEmail(email, callback) {
    const sqlstr = 'SELECT *FROM `users` WHERE `email`=?';
    connection.query(sqlstr,email, (err,results) => {
        if(err){
            return callback(err);
        }
        //null的目的是让c_user.js中的callback()调用对应上实参
        callback(null, results);
    });

}
exports.checkEmail = checkEmail;