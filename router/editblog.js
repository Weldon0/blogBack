// 主要给客户端返回编辑博客旁边的个人资料，渲染编辑博客的页面
const express = require('express');
const router = express.Router();
const fs = require('fs')
router.get('/user/view', function(req, res) {
	function send(code, message) {
		res.status(200).json({
			code: code,
			message: message
		});
	}
	console.log(req.cookies.petname)
	fs.readFile(`admin/${req.cookies.petname}.txt`, (err, data) => {

		if (err) {
			send('error', '系统错误')
		} else {
			var data = JSON.parse(data);
			res.render('editblog', {
				name: data.name,
				email: data.email,
				password: data.password,
				phone: data.phone,
				like: data.like,
				height: data.height,
				weight: data.weight,
				work: data.work,
				signature: data.signature,
				qq: data.qq
			})
		}
	})

})
module.exports = router;
// 初始进入渲染登陆界面