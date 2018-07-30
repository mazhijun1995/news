//专门处理话题数据的模型文件

const connection = require('../tools/db_config');

//查询topics表中的数据
exports.findAllTopics = (callback) => {
    
    const sqlstr = 'SELECT *FROM `topics` ORDER BY `createdAt` DESC';
    connection.query(sqlstr, (err, results) => {
        if(err) {
            return callback(err);
        }
        callback(null, results);
    });
}