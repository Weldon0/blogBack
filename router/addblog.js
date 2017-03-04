// 添加博客，提交到服务器之后，服务器在内容后面添加日期
const express = require('express');
const router = express.Router();
const fs = require('fs')

router.post('/user/editblog', function(req, res) {
  function send(code, message) {
    res.status(200).json({
      code: code,
      message: message
    });
  }
  var date = new Date();
  req.body.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  var fileUrl = `blog/${req.cookies.petname}`;

  if (!fs.existsSync(fileUrl)) {
    fs.mkdirSync(fileUrl);
  } else {
    var fileName = `blog/${req.cookies.petname}/${req.body.title}.txt`
    fs.writeFile(fileName, JSON.stringify(req.body), (err) => {
      if (err) {
        send('file error', '抱歉 系统错误')
      } else {
        send('success', '博客添加成功')
      }
    })
  }
})
module.exports = router;