const M_user = require('../models/m_user');
//渲染用户登录页的方法
exports.showSignin = (req,res) => {
    res.render('signin.html');
}
//处理登陆的表单请求
exports.handleSignin = (req,res) => {
    //1.获取表单数据
    const body = req.body;
    //2.校验表单数据（去数据库中校验）
    // 让模型去检查邮箱 并且把数据库操作的结果返回
    M_user.checkEmail(body.email, (err, results) => {
        if(err) {
            return res.send({
                code: 500,
                message: err.message
            });
        }
        //查询没结果
        if(!results[0]) {
            return res.send({
                code: 1,
                message: '邮箱不存在，请修改!'
            });
        }
        //邮箱存在，开始验证密码
        //密码不正确
        if(results[0].paasword !== body.password) {
            return res.send({
                code:2,
                message: '密码不正确'
            });
        }
        //密码正确
        req.session.user = results[0];
        //3. 发送响应到客户端 告诉客户端可以登陆了!
        res.send({
            code: 200,
            message: '可以登录'
        });
    })
}