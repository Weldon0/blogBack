const express = require('express');
const router = express.Router();
router.get('/user/addAdmin', function(req, res) {
	res.render('addAdmin')
})
module.exports = router;
// 点击添加管理员 跳转到添加管理员的界面的请求