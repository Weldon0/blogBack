// 请求3000端口默认渲染index.html
const express = require('express');
const router = express.Router();
router.get('/',function (req,res) 
{
	res.render('index')
})
module.exports = router;
// 初始进入渲染登陆界面