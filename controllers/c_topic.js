//话题的控制器

//导入话题数据模型m_topic
const M_topic = require('../models/m_topic');
//导入moment包
const moment = require('moment');

//渲染话题列表
exports.showIndex = (req,res) => {
    //使用M_topic中的方法
    M_topic.findAllTopics((err,results) => {
    if(err){
        return res.send({
            code: 500,
            message: err.message
            });
        }
        //最终目的: res.render(V,M);
        res.render('index.html', {
            user: req.session.user,
            topics: results
        });
    });
};
