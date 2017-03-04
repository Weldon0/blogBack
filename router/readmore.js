// 处理阅读全部的请求，客户端请求的时候会返回博客的点击的博客的标题，服务端查找之后返回到
// 客户端，渲染页面
const express = require('express');
const router = express.Router();
const fs = require('fs')
router.get('/readMore/:data',function (req,res) 
{
	var title = req.params.data;
	var fileName = `blog/${req.cookies.petname}/${title}.txt`;
	 function send(code, message)
		{
	        res.status(200).json({
	            code: code,
	            message: message
	        });
	    }
	 fs.readFile(fileName,(err, data)=>
	    {
	    	var data = JSON.parse(data);
	        if (err) 
	        {
	        	send('error','系统错误')
	        }
	        else
	        {
	        	res.render('readmore',
	        	{
	        		data:data
	        	})
	        }
	    })
})
module.exports = router;