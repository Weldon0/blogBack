// 删除用户，同时要删除用户的博客，引入了自己写的模块deletefolder.js
// 先删除文件夹下的所有文件，再删除空的文件夹
const express = require('express');
const router = express.Router();
const deleteF = require('./deletfolder')
const fs = require('fs');

router.get('/user/deleteuser', function(req, res) 
{
	
	var name = req.query.name

	function send(code, message) 
	{
		res.status(200).json({
			code: code,
			message: message
		});
	}
	var userUrl = `admin/${name}.txt`;
	var blogUrl = `blog/${name}`;
	fs.unlink(userUrl, function(err) 
	{
		if (err) 
		{
			send('error', '删除失败');
			console.log('错误') 
		} 
		else 
		{
			deleteF.deleteFolder(blogUrl);
			send('success','删除成功');
		}
	})
})
module.exports = router;