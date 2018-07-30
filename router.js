const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');
const router = express.Router();
// 渲染登陆页面的请求
router.get('/signin',c_user.showSignin)
    // 处理登录表单的请求
    .post('/handleSignin', c_user.handleSignin)
    // 渲染话题列表页的请求
    .get('/', c_topic.showIndex);
    //渲染发布新话题的请求
    // .get('/topic/create', c_topic.showCreateTopic)
module.exports = router;