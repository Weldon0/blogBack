// 删除博客，获取到当前登陆的cookie，从文件中找到对应的文件夹，找到文件夹中的问价删除
const express = require('express');
const router = express.Router();
const fs = require('fs')
router.post('/deleteblog',function (req,res) 
{
	
	function send(code, message)
    {
        res.status(200).json({code:code, message:message});
    }
    var fileName = `blog/${req.cookies.petname}/${req.body.title}.txt`;
    fs.unlink(fileName, function(err)
    {
        if (err)
        {
            send('error','删除失败')
        }
        else
        {
            send('success','删除成功');
        }
    })


})
module.exports = router;